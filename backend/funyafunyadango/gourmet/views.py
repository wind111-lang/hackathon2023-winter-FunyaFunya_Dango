import requests
from dataclasses import dataclass
from dataclasses_json import dataclass_json
from django.shortcuts import render
from django.http import JsonResponse, HttpResponse

# Create your views here.


@dataclass_json
@dataclass
class JsonResult:
    company_name: str
    title: str
    url: str
    image_url: str


def index(request):
    #if request.method == 'GET':
        

    if request.method == 'POST':
        BASE_URL = 'https://hackathon.stg-prtimes.net/api'
        # datas = json.loads(request.body)#都道府県IDとキーワードをjsonで取得
        datas = 13

        url = BASE_URL + f"/prefectures/{datas}/releases?per_page=999"
        token = "b655dffbe1b2c82ca882874670cb110995c6604151e1b781cf5c362563eb4e12"
        headers = {'Content-Type': 'application/json',
                   'Authorization': f'Bearer {token}', }

        match_json = []

        result = requests.get(url, headers=headers)
        # ここでresultには、PRTIMESから受け取ったjson形式のデータが入っている
        # ここから絞り込み

        category_data = result.json()
        # res.json()で取得したリストの要素を一つずつ取り出して、それぞれの辞書の'company_name'キーにアクセスして、それをcategory_nameに代入し、それをprint()で出力しています。
        for category in category_data:
            category_name = category['company_name']
            if category['main_category_id'] == 43:
                match_json.append(category_name)
                print(category_name)
    return HttpResponse(match_json)
