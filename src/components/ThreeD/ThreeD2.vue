<template lang="pug">
#ThreeD2
  .book
    .cover 
    h2 {{ "CSS" }}
      span {{ " 3D Edition" }}
    span.writer {{"Copied by Johnny"}}
</template>

<script>
export default {
  name: 'ThreeD2'
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

#ThreeD2 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url(./imgs/floor.jpg);
  background-size: cover;
  background-attachment: fixed;
}

.book {
  width: 400px;
  height: 600px;
  background-color: white;
  transform: rotate(-37.5deg) skewX(10deg);
  box-shadow: -35px 35px 50px rgba(0, 0, 0, 1);
  transition: 0.5s;
}

/* 因為有skew，所以xy軸是傾斜的，translate的方向會不一樣 */
.book:hover {
  transform: rotate(-37.5deg) skewX(10deg) translate(20px, -20px);
  box-shadow: -50px 50px 100px rgba(0, 0, 0, 1);
}

.book:before {
  content: "";
  width: 30px;
  height: 100%;
  background-color: tomato;
  /* 一定要absolute不然會被蓋過去 */
  position: absolute;
  top: 0;
  left: 0;
  transform: skewY(-45deg) translate(-30px, -15px);
  box-shadow: inset -10px 0 20px rgba(0, 0, 0, 0.2);
  background: url(./imgs/bg.jpg);
}

.book:after {
  content: "";
  width: 100%;
  height: 30px;
  background-color: #ccc;
  /* 一定要absolute不然會被蓋過去 */
  position: absolute;
  bottom: 0;
  left: 0;
  transform: skewX(-45deg) translate(15px, 30px);
}

/* cover styling */
.book h2 {
  position: absolute;
  bottom: 100px;
  left: 40px;
  font-size: 6em;
  line-height: 1em;
  color: white;
}

.book h2 span {
  background: url(./imgs/bg.jpg);
  background-attachment: fixed;
  background-position: center;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.book .writer {
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding-top: 5px;
  color: #262626;
  font-size: 0.6em;
  font-weight: bold;
}

.book .cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70%;
  background: url(./imgs/bg.jpg);
  background-size: cover;
}
</style>