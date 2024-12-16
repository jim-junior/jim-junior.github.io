# Creating a URL Shortener service in Python Django

![](https://cdn-images-1.medium.com/max/1024/1*xSLFY9zJvUIZLMgeZL8vng.png)

URL shorteners have become a popular service on the web. Companies like [bitly](https://bitly.com/) are making great fortunes from them. But sometimes when you want a custom URL you get to pay for the service. So in this tutorial I am going to show you how to build a URL shortener service in Django.

In this tutorial I expect you to be familiar with templates and forms because i wont cover them but instead i will just show you how to pragmatically build create the service in python code.

### Setup

To setup the project, we shall need only one package. `django-urlshortner`. So lets begin by installing the package using pip. This asumes you have already setup a django project.

```
pip install django-urlshortner
```

After you should add the urlshortner app to your `INSTALLED_APPS` in settings.py

### Configuration

```py
INSTALLED_APPS = [
    # ....
    "urlshortner"
]
```

Then you migrate the models to your database

```sh
python3 manage.py migrate
```

Lastly add the routes to your `URLConf` in your `urls.py` of your Django project.

```py
url_patterns = [
    # ...
    path("r/", include("urlshortner.urls")),
]
```

Now you are good to go.

### Usage

The library provides a list of utils to create shortened urls.

To create a short version of a url use the `shorten_url` function from `urlshortner.utils` module

```py
# python3 manage.py shell
from urlshortner.utils import shorten_url

url_route = shorten_url(
    "https://github.com/jim-junior/django-urlshortner",
    is_permanent=False
)

print(url_route)
# >>> 0ee3f0
```

You can now navigate to you the route that you assigned to `urlshortner.urls` in your `URLConf` add the returned value att the end of the url. In this case it would be http://localhost:8000/r/0ee3f0/ and this would redirect you to the right URL

Sometimes you want to create a custom URL. For example you want to create a short link for a blog about your new product and you want a url that is easy to remember. You can add this easily by adding the value argument to the `shorten_url` function

```py
from urlshortner.utils import shorten_url

url_route = shorten_url(
    "https://myblog.com/blog/2022/10/10/..../my-new-product",
    value="NewProduct"
    is_permanent=False
)
```

You can now navigate to https://localhost/r/NewProduct and It will redirect you

Now that you know how to use the package i think you can intergrate it with you project.

Hope this article was helpful. You can git the project a star on [Github](https://github.com/jim-junior/django-urlshortner) or if you have any idea to add on you can contribute to its [repository](https://github.com/jim-junior/django-urlshortner). And bythaway I am the Author of this library.