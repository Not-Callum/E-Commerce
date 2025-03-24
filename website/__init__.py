from flask import Flask, jsonify
from os import path
from flask_cors import CORS

def CreateApp():
  app = Flask(__name__)
  app.config['SECRET_KEY'] = "ghost"

  cors = CORS(app)

  from .profile import profile

  app.register_blueprint(profile, url_prefix="/")

  return app