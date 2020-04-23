import gzip
import sys 
import xml.etree.ElementTree as ET


als_xml = gzip.open('p5Control.als').read()
tree = ET.fromstring(als_xml)


# FloatEvent tag holds automation events
# PointeeId in ClipEnvelope refers to device param being automated
# MxDFloatParameter->AutomationTarget[Id] is same id as PointeeId
# MxDFloatParameter->ShortName gives displayName of the parameter