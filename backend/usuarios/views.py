from django.http import JsonResponse

def teste(request):
    return JsonResponse({
        "mensagem": "API funcionando!"
    })