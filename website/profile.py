import json
from flask import Blueprint,request, jsonify
from flask_cors import CORS, cross_origin


profile = Blueprint("profile", __name__)

@profile.route("/login", methods=['POST'])
def login():
  
  data = request.get_json()
  from databaseconnector import returnUser
  
  if returnUser(data["name"]) == True:
      response = jsonify({"status": True})
      response.headers.add('Access-Control-Allow-Origin', '*')
      return response
  else:
      response = jsonify({"status": False})
      response.headers.add('Access-Control-Allow-Origin', '*')
      return response
  
  