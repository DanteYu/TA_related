from __future__ import print_function


def before_all(context):
    print("This is before_all")

def after_all(context):
    print("This is after_all")

def before_feature(context, feature):
    print("This is before_feature. " + str(feature.name) + " is running!")

def after_feature(context, feature):
    print("This is after_feature. " + str(feature.name) + " is running!")