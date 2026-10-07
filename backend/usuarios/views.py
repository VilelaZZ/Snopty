
from django.http import JsonResponse

from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Tecnologia, Curso

from .serializers import (
    TecnologiaSerializer,
    CursoSerializer,
    CadastroSerializer,
    LoginSerializer
)


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


class CadastroView(APIView):

    def post(self, request):

        serializer = CadastroSerializer(
            data=request.data
        )

        if serializer.is_valid():

            usuario = serializer.save()

            return Response(
                {
                    "mensagem": "Usuário cadastrado com sucesso!",
                    "usuario": usuario.username
                },
                status=status.HTTP_201_CREATED
            )

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )


class LoginView(APIView):

    def post(self, request):

        serializer = LoginSerializer(
            data=request.data
        )

        if serializer.is_valid():

            usuario = serializer.validated_data["usuario"]

            return Response(
                {
                    "mensagem": "Login realizado com sucesso!",
                    "usuario": usuario.username
                },
                status=status.HTTP_200_OK
            )

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )
