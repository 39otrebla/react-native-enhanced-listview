## **React Native enhanced ListView**

#### **Installation**
````sh
npm i --save react-native-enhanced-listview
````


#### **Why Do I Need This?**

Quoting from Dan Abramov's [redux-thunk readme](https://github.com/gaearon/redux-thunk#why-do-i-need-this):

> If you’re not sure whether you need it, you probably don’t.


#### Performance improvement on large dataset

***Original ListView***

ReactNative ListView component is great, but it suffers performance leak on large dataset, ending up consuming a lot of memory, in particular when rows contain images (or, even worse, an image gallery - e.g. an HorizontalScrollView). 
The biggest performance issues have been discovered in applications in which the end-user can scrolls the list down infinitely. Memory consumption is huge when rendering just Text, but it is absolutely abnormal when rows render images or set of images.

This is the typical memory consumption graph on iOS using the original react native ListView with 100-to-1000 rows (loaded 20 at a time using onEndReached API):

As the graph shows, memory seems to be never freed, ending up in a never-ending increase of memory consumption.

***Enhanced ListView***

react-native-enhanced-listview is an hack that exploits onChangeVisibleRows API. This is the memory consumption graph on iOS using exactly the same dataset:


#### Usage

react-native-enhanced-listview just wraps the original ListView component, thus passing props directly to it. In other words, use EnhancedListView exactly like you'd use a ListView. For more information about ListView API and props, please refer to the [official documentation](https://facebook.github.io/react-native/docs/listview.html).

#### License

[MIT](https://opensource.org/licenses/MIT)
