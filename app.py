from flask import Flask
from flask import render_template
from flask import jsonify
from jieba.analyse import extract_tags
import utils
import string

app = Flask(__name__)

# 开始页面
@app.route('/')
def go_main():
    return render_template("main.html")

# 获取当前时间
@app.route('/time')
def get_time():
    return utils.get_time()

# 获取各情况累计人数数据
@app.route('/covCountData')
def get_cov_count_data():
    data = utils.get_cov_count_data()
    return jsonify({"confirm": str(data[0]), "suspect": data[1], "heal": str(data[2]), "dead": str(data[3])})

# 获取地图数据
@app.route('/covMapData')
def get_cov_map_data():
    res = []
    for item in utils.get_cov_map_data():
        res.append({"name":item[0], "value":int(item[1])})
    return jsonify({"data":res})

# 获取全国疫情累计数据
@app.route('/covTotalData')
def get_cov_total_data():
    data = utils.get_cov_total_data()
    day, confirm, suspect, heal, dead = [], [], [], [], []
    for a, b, c, d, e in data[0:]:
        day.append(a.strftime("%m-%d"))
        confirm.append(b)
        suspect.append(c)
        heal.append(d)
        dead.append(e)
    return jsonify({"day": day, "confirm": confirm, "suspect": suspect, "heal": heal, "dead": dead})

# 获取全国疫情新增数据
@app.route('/covNewData')
def get_cov_new_data():
    data = utils.get_cov_new_data()
    day, confirm_add, suspect_add = [], [], []
    for a, b, c in data[0:]:
        day.append(a.strftime("%m-%d"))
        confirm_add.append(b)
        suspect_add.append(c)
    return jsonify({"day": day, "confirm_add": confirm_add, "suspect_add": suspect_add})

# 获取全国疫情严重地区数据
@app.route('/covSeriousData')
def get_cov_serious_data():
    data = utils.get_cov_serious_data()
    city, city_confirm = [], []
    for a, b in data[0:]:
        city.append(a)
        city_confirm.append(int(b))
    return jsonify({"city": city, "city_confirm": city_confirm})

# 获取热搜词云数据
@app.route('/covCloudData')
def get_cov_cloud_data():
    data = utils.get_cov_cloud_data()
    c = []
    for i in data:
        k = i[0].rstrip(string.digits)   # 移除热搜数字
        v = i[0][len(k):]   # 获取热搜数字
        ks = extract_tags(k)   # 使用jieba提取关键字
        for j in ks:
            if not j.isdigit():
                c.append({"name":j, "value": v})
    return jsonify({"keyWords": c})

if __name__ == '__main__':
    app.run()

