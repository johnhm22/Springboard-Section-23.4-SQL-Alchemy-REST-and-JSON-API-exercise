"""Models for Cupcake app."""

from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

def connect_db(app):
    db.app = app
    db.init_app(app)


# MODELS GO BELOW

class Cupcake(db.Model):
    __tablename__ = 'cupcakes'

    id = db.Column(db.Integer,
                    primary_key=True,
                    autoincrement=True)

    flavor = db.Column(db.String(100),
                    nullable=False,
                    unique=False)

    size = db.Column(db.String(100),
                    nullable=False,
                    unique=False)

    rating = db.Column(db.Float,
                    nullable=False,
                    unique=False)

    image = db.Column(db.String,
                    nullable=False,
                    default = "https://tinyurl.com/demo-cupcake",
                    unique=False)
    

    def serialize(self):
            """Returns a dict representation of todo which we can turn into JSON"""
            return {
                'id': self.id,
                'flavor': self.flavor,
                'size': self.size,
                'rating': self.rating,
                'image': self.image
            }

    def __repr__(self):
        return f"<Cupcake {self.id} flavor={self.flavor} size={self.size} rating={self.rating} image={self.image} >"
    

