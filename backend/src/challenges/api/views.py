from rest_framework.generics import ListAPIView, RetrieveAPIView
from challenges.models import Challenge
from .serializers import ChallengeSerializer

class ChallengeListView(ListAPIView):
    queryset = Challenge.objects.all()
    serializer_class = ChallengeSerializer


class ChallengeDetailView(RetrieveAPIView):
    queryset = Challenge.objects.all()
    serializer_class = ChallengeSerializer