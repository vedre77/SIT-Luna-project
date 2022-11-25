from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, GenericAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from restaurants.models import Restaurant
from reviews.models import Review, Comment
from reviews.permissions import IsOwnerOrReadOnly, IsCreatorOrReadOnly
from reviews.serializers import ReviewSerializer, CommentSerializer


# POST -> create a review for a certain restaurant
class ReviewCreate(ListCreateAPIView):
    serializer_class = ReviewSerializer
    queryset = Restaurant.objects.all()
    lookup_url_kwarg = 'restaurant_id'

    def create(self, request, *args, **kwargs):
        restaurant = self.get_object()
        review = Review(creator=request.user, restaurant=restaurant, text_content=request.data['text_content'],
                        rating=request.data['rating'])
        review.save()
        return Response(self.get_serializer(instance=review).data)


# GET -> Get the list of the reviews for a single restaurant
class ReviewList(ListCreateAPIView):
    serializer_class = ReviewSerializer
    lookup_url_kwarg = 'restaurant_id'

    def get_queryset(self):
        restaurant_id = self.kwargs.get("restaurant_id")
        return Review.objects.filter(restaurant__id=restaurant_id).order_by("-created")


# GET -> Get the list of the reviews for a single user
class UserReviewList(ListCreateAPIView):
    serializer_class = ReviewSerializer
    lookup_url_kwarg = 'user_id'

    def get_queryset(self):
        user_id = self.kwargs.get("user_id")
        return Review.objects.filter(creator=user_id).order_by("-created")


# DELETE -> Delete own review
class DeleteReview(RetrieveUpdateDestroyAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    lookup_url_kwarg = 'review_id'
    permission_classes = [IsCreatorOrReadOnly]


# POST -> Like a review
class ToggleLike(GenericAPIView):
    serializer_class = ReviewSerializer
    queryset = Review.objects.all()
    lookup_url_kwarg = 'review_id'
    permission_classes = [IsAuthenticated]

    def post(self, request, review_id):
        review_to_save = self.get_object()
        user = request.user
        if review_to_save in user.liked_reviews.all():
            user.liked_reviews.remove(review_to_save)
            return Response(self.get_serializer(instance=review_to_save).data)
        user.liked_reviews.add(review_to_save)
        return Response(self.get_serializer(instance=review_to_save).data)


# POST -> create a comment for a certain review
class CommentCreate(ListCreateAPIView):
    serializer_class = CommentSerializer
    queryset = Review.objects.all()
    lookup_url_kwarg = 'review_id'

    def create(self, request, *args, **kwargs):
        review = self.get_object()
        comment = Comment(commented_by=request.user, commented_on=review, text_content=request.data['text_content'])
        comment.save()
        return Response(self.get_serializer(instance=comment).data)


# GET -> Get the list of comments for a single user
class UserCommentList(ListCreateAPIView):
    serializer_class = CommentSerializer
    lookup_url_kwarg = 'user_id'

    def get_queryset(self):
        user_id = self.kwargs.get("user_id")
        return Comment.objects.filter(commented_by=user_id).order_by("-created")


# GET -> Get the list of comments for a single review
class ReviewCommentList(ListCreateAPIView):
    serializer_class = CommentSerializer
    lookup_url_kwarg = 'review_id'

    def get_queryset(self):
        review_id = self.kwargs.get("review_id")
        return Comment.objects.filter(commented_on=review_id).order_by("-created")


# DELETE -> Delete own comment
class DeleteComment(RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    lookup_url_kwarg = 'comment_id'
    permission_classes = [IsOwnerOrReadOnly]
