# BBC Clone

> [BBC Link](https://www.bbc.com/korean/resources/idt-48d3c9a7-4063-4289-9726-611b5ea9d7b5) 이 사이트를 클론 코딩해보자 🚀

> 최신 트렌드(🤩)인 `스크롤에 따른 인터렉티브함을 표현하는 것`을 학습해보자

> with [1분코딩](https://www.youtube.com/playlist?list=PLe9WXHRkq9p11MIiI1FnMc8aekiBShq2L)

# WIL(What I Learned this project)

> 이 프로젝트를 통해서 배운 내용을 간단하기 정리한다.

<br />

## HTML

<br />

## CSS

### position : sticky

> 일반적으로 `position : static`과 유사하다. 하지만 스크롤이 설정한 값에 도달하면 `position : fixed`와 같은 효과를 나타낸다.

> `position : fixed`는 항상 뷰포트에 고정한다. 이와 비교하면, `position : sticky`는 부모태그의 절대위치가 스크롤 안에 들어있을 때 특정위치에 도달하면 `fixed` 효과를 갖게 된다. 만약 스크롤이 부모태그를 벗어나게 되면 `position : sticky`으로 설정된 엘리먼트는 `position : static`와 같은 효과를 낸다.

![sticky](image/sticky.gif)

> 아래 코드의 프리뷰

```CSS
    .container {
        width: 500px;
        height: 500vh;
        border: 3px solid #123123;
        margin: 3rem;
    }
    .parent {
        width: 400px;
        height: 300vh;
        background-color: #eee;
        border: 3px solid #333fff;
        padding: 2rem;
    }
    .sticky {
        position: sticky;
        top: 0;
        left: 0;
        border: 3px solid #532aaa;
        margin: 300px 0;
    }
```

```HTML
    <div class="container">
        <div class="parent">
            parent
            <div class="sticky">sticky</div>
        </div>
    </div>
```

<br />

> `position : sticky`의 경우에는 <u>IE에서는 지원하지않기 때문에</u> IE에서 사용하기 위해선 `position:absolute` 를 사용하여 스크롤에 따라서 **자바스크립트로 구현**해줘야한다.

<br/>

### z-index 설정에 관한 몇가지 규칙

1. 아래와 같은 HTML구조로 만들어져 있을 때, `scroll-graphic` 태그에 position 속성을 주게 되면 그 다음의 `scroll-text`의 태그는 항상 그 밑으로 들어가게 된다. z-index를 주어도 상황은 변하지않는다. 현재 같은 쌓은 맥락이 아니기 때문이다. 이를 해결하기 위해선 같은 쌓임맥락으로 변경해줘야한다. `scroll-text` 태그에 position속성(relative)를 주면 된다.

   > 같은 쌓임맥락(stacking context)에서만 순서대로 쌓인다.

   ```HTML
   <div class="scroll-graphic">
       <!-- ... -->
   </div>
   <div class="scroll-text global-width">
       <!-- ... -->
   </div>
   ```

2. z-index를 설정하기 위해선 position속성(absolute, relative 등)이 설정되어 있어야 한다.

<br />

## JavaScript

### getBoundingClientRect()

`Element.getBoundingClientRect()`:

엘리먼트의 위치와 크기를 담은 객체를 리턴한다. 그 값은 뷰포트를 기준으로 상대적인 값을 갖는다.

```HTML
    <div class="wrapper">
        <div class="box box1">box1</div>
        <div class="box box2">box2</div>
        <div class="box box3">box3</div>
        <div class="box box4">box4</div>
        <div class="box box5">box5</div>
    </div>
```

```CSS
    .wrapper {
        width: 100%;
        height: 400vh;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border: 1px solid black;
    }
    .box {
        width: 400px;
        height: 100px;
        text-align: center;
    }
    .box1 {
        background-color: aqua;
    }
    .box2 {
        background-color: aquamarine;
    }
    .box3 {
        background-color: blue;
    }
    .box4 {
        background-color: tomato;
    }
    .box5 {
        background-color: dodgerblue;
    }
```

```javascript
console.log(document.querySelector('.box1').getBoundingClientRect());
//페이지가 로딩되었을 때, wrapper 엘리먼트의 위치를 담은 객체를 출력한다.

const $box = document.querySelectorAll('.box');
window.addEventListener('scroll', (e) => {
	for (let i = 0; i < $box.length; i++) {
		console.log(i, $box[i].getBoundingClientRect());
		//스크롤이 일어날 때마다 박스1~5번의 위치를 담은 객체를 출력한다.
	}
});
```

```
bottom: 160.33333587646484
height: 100
left: 432.66668701171875
right: 832.6666870117188
top: 60.333335876464844
width: 400
x: 432.66668701171875
y: 60.333335876464844
```

> 출력된 결과값이 담고 있는 프로퍼티

> `bottom left right top`는 뷰포트를 기준으로 상대적인 엘리먼트의 위치를, `height width`는 가로, 세로 크기를 나타낸다. 또한 `x, y`는 엘리먼트의 좌측상단의 위치를 나타낸다.

> 스크롤에 따른 엘리먼트를 위치를 알기 위해선 `top`이나 `y`의 속성을 이용한다.

<br />

### Intersection Observer

> 특정 요소가 뷰포트에 포함되는지, 그렇지않은지, 쉽게 표현하자면, 현재 페이지에 보이는지 사라졌는지를 체크 할 수 있는 기능을 제공하는 API이다.

> 비동기적으로 작동한다.

> 여기서 사용한 이유 스크롤에 따라서 변화되는 요소만을 관찰하고 싶기때문에. `Intersection Observer`를 사용하지않는다면, 기본적으로 스크롤이 일어날 때마다 변화에 상관없이 모든 요소를 관찰하게 된다. 여기서는 관찰요소가 몇 개안되지만, 100개라고 한다면, 스크롤마다 100번씩 반복하게 되면 페이지 성능에 영향을 미치게 될 수 있다.

```javascript
const io = new IntersectionObserver(callback [,option ] );
//생성자 함수를 통해서 인스턴스를 생성한다.

io.observer(element);
//관찰할 대상을 등록한다.

//관찰대상이 보이거나 사라지게 되면 콜백함수가 호출된다.
function callback(entries, observer){
    //entries는 관찰 대상에 대한 정보를 담고 있는 배열이다.
    entries.forEach(entry => {
        console.log(entry);
    })
}
```

> entry 객체가 담고 있는 프로퍼티들이다. 여기서는 `target`을 사용하였다. 그 외에 필요한 부분이 있을 때 찾아보면서 활용해야할 것 같다.

> [Link](https://heropy.blog/2019/10/27/intersection-observer/)

```javascript
boundingClientRect: DOMRectReadOnly {x: 432.65625, y: 47.25, width: 400.015625, height: 100.015625, top: 47.25, …}
//관찰대상(엘리먼트의 위치와 크기를 담고 있다)
intersectionRatio: 1
intersectionRect: DOMRectReadOnly {x: 432.65625, y: 47.25, width: 400.015625, height: 100.015625, top: 47.25, …}
isIntersecting: true
isVisible: false
rootBounds: DOMRectReadOnly {x: 0, y: 0, width: 1263.34375, height: 224, top: 0, …}
target: div.box.box1
//관찰대상의 엘리먼트 정보
time: 494.98999980278313
```
