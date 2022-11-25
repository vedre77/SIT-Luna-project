from django.urls import path
from reviews.views import ReviewCreate, CommentCreate, ReviewList, UserReviewList, UserCommentList, DeleteComment, \
    DeleteReview, ToggleLike, ReviewCommentList

urlpatterns = [
    # reviews
    path('reviews/new/<int:restaurant_id>/', ReviewCreate.as_view()),
    path('reviews/restaurant/<int:restaurant_id>/', ReviewList.as_view()),
    path('reviews/user/<int:user_id>/', UserReviewList.as_view()),
    path('reviews/<int:review_id>/', DeleteReview.as_view()),
    path('reviews/like/<int:review_id>/', ToggleLike.as_view()),

    # comments
    path('review/comment/<int:user_id>/', UserCommentList.as_view()),
    path('review/comment/read/<int:review_id>/', ReviewCommentList.as_view()),
    path('review/comment/delete/<int:comment_id>/', DeleteComment.as_view()),
    path('review/comment/new/<int:review_id>/', CommentCreate.as_view()),

]

# REVIEW
# /api/reviews/new/<int:restaurant_id>/ POST: Create new review for a restaurant - WORKS
# /api/reviews/restaurant/<int:restaurant_id>/ GET: Get the list of the reviews for a single restaurant - WORKS
# /api/reviews/user/<int:user_id>/ GET: Get the list of the reviews by a single user - WORKS
# /api/reviews/<int:review_id>/ DELETE: Delete a specific review (only by owner) - WORKS
# /api/reviews/like/<int:review_id>/ POST: Like a review / toggle like for a review - WORKS.


# COMMENT
# /api/review/comment/new/<int: review_id>/ POST: Comment on the review - WORKS
# /api/review/comment/delete/<int:comment_id>/ DELETE: Delete the comment on the review - WORKS (!!! Changed the
# momentum url patter to avoid url clash!!!)
# /api/review/comment/<int:user_id>/ GET: Get all the comments from a single user - WORKS
