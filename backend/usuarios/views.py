from django.http import JsonResponse
from rest_framework import viewsets

from .models import Tecnologia, Curso
from .serializers import TecnologiaSerializer, CursoSerializer


def teste(request):
    return JsonResponse({
        "mensagem": "Backend funcionando!"
    })


class TecnologiaViewSet(viewsets.ModelViewSet):
    queryset = Tecnologia.objects.all()
    serializer_class = TecnologiaSerializer


class CursoViewSet(viewsets.ModelViewSet):
    queryset = Curso.objects.all()
    serializer_class = CursoSerializer