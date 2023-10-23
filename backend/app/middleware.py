import time
from rest_framework.response import Response


class CustomMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        start_time = time.time()
        response = self.get_response(request)
        end_time = time.time()

        view_name = request.resolver_match.view_name

        print(f"Request: {request.method} {request.path} (View: {view_name})")

        # Log the response status code and processing time
        print(
            f"Response: {response.status_code} (Processed in {end_time - start_time:.2f} seconds)")

        return response
