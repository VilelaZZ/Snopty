from rest_framework import serializers
from .models import Tecnologia, Curso


class TecnologiaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tecnologia
        fields = '__all__'


class CursoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Curso
        fields = '__all__'