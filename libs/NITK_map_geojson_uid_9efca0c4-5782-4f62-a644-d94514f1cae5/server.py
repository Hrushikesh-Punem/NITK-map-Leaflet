from flask import Flask, send_from_directory
import os

app = Flask(__name__)

@app.route('/NITK_map.geojson')
def serve_geojson():
    directory = os.path.abspath('libs/NITK_map_geojson_uid_9efca0c4-5782-4f62-a644-d94514f1cae5')
    return send_from_directory(directory, 'NITK_map.geojson')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)

