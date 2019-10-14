# Vue-for-beginner

<모델-뷰-뷰모델 MVVM 구성요소>
<li>모델: 도메인 영역 담당. 데이터와 비즈니스 로직 등을 표현</li>
<li>뷰: 데이터를 사용자가 보기에 적합한 형태로 표시하고 사용자의 입력을 받음</li>
<li>뷰모델: 뷰를 그리기 위한 상태 유지, 뷰에서 받은 입력을 적절한 형태로 변환하여 모델에 전달</li>
  <br>
<table>
  <tr>
    <td>IDE
    <td>Webstorm
  </tr>
  <tr>
    <td>프로젝트 생성
    <td>File - new project - [new project] - [Vue.js]선택 - Location(폴더 이름) - Vue CLI:npx --package @vue/cli vue
  </tr>
  <tr>
    <td colspan=2>(프로젝트 생성 대기 - cli 나중에 설치하려면 그냥 empty project로 프로젝트 생성)
  </tr>
  <tr>
    <td>node.js 설치하기
    <td>https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd (vue.js devtools)
  </tr>
  <tr>
    <td>vue 개발자 도구 설치하기
    <td>https://nodejs.org/ko/download/ (LTS)
  </tr>
  <tr>
    <td>cdn
    <td>
      <li><script src="https://unpkg.com/vue"></script></li>
      <li>(라우터)<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script></li>
      <li>(뷰 리소스)<script src="https://cdn.jsdelivr.net/npm/vue-resource@1.5.1"></script></li>
      <li>(axios)<script src="https://unpkg.com/axios/dist/axios.min.js"></script></li>
  </tr>
  <tr>
    <td>vue.js devtool 화살표 표시(개발자 도구)
    <td>
      <li>Root 컴포넌트 : 최상위 컴포넌트</li>
  </tr>
  <tr>
    <td colspan=2><b>***뷰 인스턴스 라이프 사이클 : 인스턴스의 상태에 따라 호출할 수 있는 속성들</b>
  </tr>
  <tr>
    <td>beforeCreate
    <td>data, meghods 속성이 인스턴스에 미정, 화면요소에 접근x
  </tr>
  <tr>
    <td>created
    <td>data, methods속성 정의, template 화면요소 접근x
  </tr>
  <tr>
    <td>beforeMount
    <td>render()함수 호출되기 직전
  </tr>
  <tr>
    <td>mounted
    <td>el 화면요소 인스턴스 부착 후 호출 단계, template 화면요소 접근ㅇ
  </tr>
  <tr>
    <td>beforeUpdate
    <td>데이터 변경 시 화면을 다시 그리기 전에 호출되는 단계
  </tr>
  <tr>
    <td>updated
    <td>데이터 변경후 화면 요소 변경 완료된 시점
  </tr>
  <tr>
    <td>beforeDestroy
    <td>뷰 인스턴스 파괴 직전 호출단계
  </tr>
  <tr>
    <td>destroyed
    <td>뷰 인스턴스 파괴 후 호출단계, 뷰 인스턴스에 정의한 모든 속성 제거
  </tr>
  <tr>
    <td>Vue CLI 명령어
    <td>
      <li>Vue CLI 2 삭제(충돌방지) : npm r -g vue-cli</li>
      <li>Vue CLI 3 설치 : npm i -g @vue/cli</li>
      <li>버전 확인 : vue --version</li>
      <li>디렉토리 생성 : 위치 지정 후 vue create [폴더 이름]</li>
      <li>실행 : 위치 지정 후 npm run serve</li>
  </tr>
  <tr>
    <td>Vue CLI 폴더, 요소
    <td>
      <li>[node_modules] : npm install 명령어로 다운받은 라이브러리가 존재하는 위치</li>
      <li>[src] : .vue 파일을 비롯하여 애플리케이션이 동작하는 데 필요한 로직이 들어갈 위치</li>
      <li>[public] - index.html : 뷰로 만든 웹 앱의 시작점(npm run deb 실행 시 로딩되는 파일)</li>
      <li>package.json : npm 설정 파일(뷰 애플리케이션이 동작하는 데 필요한 라이브러리들을 정의하는 파일)</li>
      <li>webpack.config.js : 웹팩 설정 파일(웹팩 빌드를 위해 필요한 로직들을 정의하는 파일)</li>
  </tr>
  <tr>
    <td colspan=2><b>***package.json 구조</b>
  </tr>
  <tr>
    <td colspan=2>
      <li>name, description, version, author : 프로젝트 정보</li>
      <li>scripts{dev, build} : npm 실행 명령어</li>
      <li>dependencies{}, devDependencies{} : 뷰, 웹팩 관련 라이브러리</li>
      -프로젝트 정보를 담고 있는 설정 파일 <br>
      -npm 명령어 및 부로 애플리케이션을 제작하는 데 필요한 라이브러리 정보들을 포함 <br>
  </tr>
  <tr>
    <td>브라우저 저장소의 종류
    <td>로컬 스토리지, 세션 스토리지, 인덱스드 디비
  </tr>
  <tr>
    <td>
    <td>
  </tr>
</table>

