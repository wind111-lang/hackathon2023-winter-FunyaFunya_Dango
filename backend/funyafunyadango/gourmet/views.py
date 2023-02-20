import requests
import json
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
    created_at: str
    like: int
    youtube_url: str

def index(request, param):
    # if request.method == 'GET':

    #カテゴリーIDを定義
    category_id = 43

    if request.method == 'GET':
        BASE_URL = 'https://hackathon.stg-prtimes.net/api'
        # datas = json.loads(request.body)#都道府県IDとキーワードをjsonで取得
        datas = param

        url = BASE_URL + f"/prefectures/{datas}/releases?per_page=999"
        url_youtube = BASE_URL + f"/categories/{category_id}/releases/movie"
        token = "b655dffbe1b2c82ca882874670cb110995c6604151e1b781cf5c362563eb4e12"
        # 公開可能確認済
        headers = {'Content-Type': 'application/json',
                   'Authorization': f'Bearer {token}', }

        json_list = []

        result_youtube = requests.get(url_youtube, headers=headers)
        youtube_data = result_youtube.json()
        for youtube in youtube_data:
            youtube_info = (youtube['company_id'], youtube['release_id'], youtube['youtube_url'])

        result = requests.get(url, headers=headers)
        # ここでresultには、PRTIMESから受け取ったjson形式のデータが入っている
        # ここから絞り込み

        category_data = result.json()
        # result.json()で取得したリストの要素を一つずつ取り出して、dataclassに格納していく
        # 結果はjson_listに格納され,重複は弾く
        # 最終的にはdatasをjson形式にして返す
        for category in category_data:
            if category['main_category_id'] == 43 or category['sub_category_id'] == 43:
                    #youtubeデータがある場合
                    if category['company_id'] == youtube['company_id'] and category['release_id'] == youtube['release_id']:
                        for youtube in youtube_data:
                            match = JsonResult(category['company_name'], category['title'], category['url'], category['main_image'], category['created_at'], category['like'], youtube['youtube_url'])
                            if match.to_dict() not in json_list:
                                json_list.append(match.to_dict())
                            break
                    #youtubeデータがない場合
                    else:
                        match = JsonResult(category['company_name'], category['title'], category['url'], category['main_image'], category['created_at'], category['like'], "")
                        if match.to_dict() not in json_list:
                            json_list.append(match.to_dict())

        sort_json_list = sorted(
            json_list, key=lambda x: x['created_at'])
        # ソート用(仮)
        datas = {'datas': json_list}
        return JsonResponse(datas, safe=False, json_dumps_params={'ensure_ascii': False})
