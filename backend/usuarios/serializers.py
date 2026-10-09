from django.contrib.auth import authenticate
from django.contrib.auth.models import User

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


class CadastroSerializer(serializers.ModelSerializer):

    senha = serializers.CharField(
        write_only=True,
        min_length=6
    )

    class Meta:
        model = User
        fields = ['username', 'email', 'senha']

    def create(self, validated_data):
        senha = validated_data.pop('senha')

        usuario = User.objects.create_user(
            password=senha,
            **validated_data
        )

        return usuario


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    senha = serializers.CharField(
        write_only=True
    )

    def validate(self, dados):
        email = dados.get('email')
        senha = dados.get('senha')

        try:
            usuario = User.objects.get(
                email=email
            )
        except User.DoesNotExist:
            raise serializers.ValidationError(
                "Usuário ou senha inválidos."
            )

        usuario = authenticate(
            username=usuario.username,
            password=senha
        )

        if not usuario:
            raise serializers.ValidationError(
                "Usuário ou senha inválidos."
            )

        dados['usuario'] = usuario

        return dados