import time
import pymysql

# 获取当前时间
def get_time():
    time_str = time.strftime("%Y{}%m{}%d{} %X")
    return time_str.format("年","月","日")

# 获取数据库疫情数据
# 连接数据库
def get_conn():
    # 建立连接
    conn = pymysql.connect(host="127.0.0.1",
                           user="root",
                           password="",
                           db="cov2019",
                           charset="utf8")
    # 创建游标
    cursor = conn.cursor()
    return conn, cursor

# 关闭数据库
def close_conn(conn, cursor):
    if cursor:
        cursor.close()
    if conn:
        conn.close()

# 查询
def query(sql, *args):
    conn, cursor = get_conn()
    cursor.execute(sql, args)
    res = cursor.fetchall()
    close_conn(conn, cursor)
    return res

# 获取数据库疫情数据
def get_cov_count_data():
    sql = "select sum(confirm)," \
           "(select suspect from history order by ds desc limit 1)," \
           "sum(heal)," \
           "sum(dead)" \
           "from details " \
           "where update_time=(select update_time from details order by update_time desc limit 1)"
    res = query(sql)
    return res[0]

# 获取地图数据
def get_cov_map_data():
    sql = "select province, sum(confirm) from details " \
          "where update_time=(select update_time from details " \
          "order by update_time desc limit 1)" \
          "group by province"
    res = query(sql)
    return res

# 获取全国疫情累计数据
def get_cov_total_data():
    sql = "select ds, confirm, suspect, heal, dead from history"
    res = query(sql)
    return res

# 获取全国疫情新增数据
def get_cov_new_data():
    sql = "select ds, confirm_add, suspect_add from history"
    res = query(sql)
    return res

# 获取全国疫情严重地区数据
def get_cov_serious_data():
    sql = 'select city, confirm ' \
          'from (select city, confirm from details ' \
          'where update_time=(select update_time from details ' \
          'order by update_time desc limit 1)' \
          'and province not in("湖北","北京","上海","天津","重庆")' \
          'and city not in ("地区待确认")' \
          'union all ' \
          'select province as city, sum(confirm) as confirm ' \
          'from details ' \
          'where update_time=(select update_time from details ' \
          'order by update_time desc limit 1)' \
          'and province in ("北京","上海","天津","重庆") group by province) as a ' \
          'order by confirm desc limit 5'
    res = query(sql)
    return res

# 获取热搜云词数据
def get_cov_cloud_data():
    sql = 'select content from hotsearch ' \
          'order by id desc limit 20'
    res = query(sql)
    return res


if __name__ == "__main__":
    print(get_cov_cloud_data())

