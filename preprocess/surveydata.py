import json

with open('./burba-datacollector-export.json') as json_file:
    data = json.load(json_file)
    print(data)