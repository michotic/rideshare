from rest_framework import serializers
from .models import Profile, RidePosting


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('username', 'password', 'email',  'bio', 'profileimg', 'location')

class RidePostingSerializer(serializers.ModelSerializer):
    class Meta:
        model = RidePosting
        fields = ('order_id', 'point_a', 'point_b',  'is_offer', 'seats', 'bags', 'creator', 'date')