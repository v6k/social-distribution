from rest_framework.pagination import LimitOffsetPagination, PageNumberPagination

class PostPageNumberPagination(PageNumberPagination):
    page_size = 5
    page_size_query_param = 'size'
