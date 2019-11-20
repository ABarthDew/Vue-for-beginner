//설정파일
module.exports = {
  // options...
  devServer: {
    port: 9999,
    // host:"locker.tpne.co.kr" //hosts에 등록 후 사용가능(호스트 변경 후 사용가능),
    // https:true //보안통신 <-> false(http)
    proxy: {//프론트에서 콜을 했을 때 백엔드로 갈 수 있도록 연결해주는 설정
      '^/api': {
        target: 'http://localhost:7001'
      }
    },
  },
};

