import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Main.scss"
import sale from "../assets/sale.gif"
import instead from "../assets/instead.gif"
import chart from "../assets/chart.png"

function Main(){
  return(
    <div className="fifa">
    <Header/>
    <div className="caution">
      <h2 className="WhiteCaution">주의사항</h2><p className="WhiteP">※접속 1회당 이용요금이 부과되며 신청하시는 분의 과실로 인해 <span className="yellow">대낙 중단시 대낙을 완료한 것으로</span> 간주하며 <span className="yellow">대낙 재진행시 새로 이용요금을 납부</span>하셔야 합니다.</p><p className="WhiteP">※신청서 내용대로만 진행을 해드리며, 내용 변경시 입금 전에 기존 신청서를 <span className="yellow">취소 요청</span>하시고 신청서를 재작성해주셔야 합니다. 신청서 내용과 실제 내용이 달라 발생하는 손해에 대해서는 <span className="yellow">어떠한 책임도 지지 않습니다.</span></p></div>
      <img src={sale}/>
      <h2>신청서 작성</h2>
      <div className="GrayForm">
        <h3>신청자명</h3>
        <input className="InputText" type="text" placeholder="본인 이름"/>
        <h3>입금자명</h3>
        <input className="InputText" type="text" placeholder="입금하시는 분 이름"/>
      </div>
      <div className="GrayForm">
        <h3>아이디</h3>
        <label><input type="checkbox"/>OTP 사용중</label>
        <label><input type="checkbox"/>넥슨 일회용 로그인(<span className="BlueSpan">넥슨 일회용 로그인이란?</span>)</label>
        <div className="IDInput">
        <button className="LoginBtn">로그인방식▼</button><input className="InputText" type="text" placeholder="영문으로 작성해주세요"/><button className="ID">자주 쓰는<br/>계정 목록</button>
        </div>
        <h3>비밀번호</h3>
        <input className="InputText" type="text" placeholder="영문으로 작성, 대소문자 구분"/>
        <h3>2차 비밀번호</h3>
        <input className="InputText" type="text" placeholder="숫자 4자리"/>
      </div>
      <div className="GrayForm">
        <h3>신청하실 서비스 선택</h3>
        <label><input type="radio"/>PC방 대낙</label>
        <label><input type="radio"/>PC방 접속만(1분)</label>
        <label><input type="radio"/>PC방 트레이드</label>
        <label><input type="radio"/>튜토리얼 대신 진행(신규 감독 생성시)</label>
      </div>
      <img src={instead} />
      <div className="GrayForm">
        <h3>탑클래스 보유 여부</h3>
        <label><input type="radio"/>있음</label>
        <label><input type="radio"/>보관함에 있는 탑클 사용</label>
        <label><input type="radio"/>없음</label>
      </div>
      <div className="GrayForm">
        <h3>수수료 쿠폰 사용 여부</h3>
        <label><input type="radio"/>있음</label>
        <label><input type="radio"/>없음</label>
        <p className="RedP">※요청하신대로 쿠폰 사용 후 나머지는 모두받기로만 신청 가능합니다.(선별 대낙, 개별 대낙은 신청 자체가 불가하며 미인지 상태에서 모두받기로 진행이 되더라도 그로 인한 어떠한 책임도 지지 않습니다.)</p>
      </div>
      <div className="GrayForm">
        <h3>피파대낙닷컴을 처음 알게되신 경로</h3>
        <div className="path"><label><input type="radio"/>네이버 검색</label><label><input type="radio"/>구글 검색</label></div>
        <div className="path"><label><input type="radio"/>피커투</label><label><input type="radio"/>피파 인벤</label></div>
        <div className="path"><label><input type="radio"/>지인 추천</label><label><input type="radio"/>BJ곽준혁</label></div>
        <div className="path"><label><input type="radio"/>BJ김승섭</label><label><input type="radio"/>BJ유정훈</label></div>
        <div className="path"><label><input type="radio"/>BJ주간신보석</label><label><input type="radio"/>BJ원창연</label></div>
        <div className="path"><label><input type="radio"/>기타</label></div>
      </div>
      <div className="GrayForm">
        <h3>휴대폰 번호</h3>
        <div className="phone">
          <input className="num" type="text"/>-<input className="num" type="text"/>-<input className="num" type="text"/>
        </div>
        <p className="PhoneP">대낙 진행중 비상시 연락 용도 또는 본인 확인 용도로 사용되며 이외의 목적으로는 사용되지 않습니다.</p>
      </div>
      <div className="accept">
      <label><input type="checkbox"/>전체 동의</label>
      <label><input type="checkbox"/>모두받기 진행 동의(필수)</label>
      <div className="information">
      요청하신대로 쿠폰 사용 후 나머지는 모두받기로만 신청 가능합니다.(선별 대낙, 개별 대낙은 신청 자체가 불가하며 미인지 상태에서 모두받기로 진행이 되더라도 그로 인한 어떠한 책임도 지지 않습니다.)
      </div>
      <label><input type="checkbox"/>개인정보 수집 및 활용 동의(필수)</label>
      <div className="information">
      저희 피파대낙닷컴에서는 피파대낙 서비스를 제공하기 위해 회원님의 이름, 아이디, 비밀번호, 2차 비밀번호, 휴대폰 번호 등의 개인정보를 위 신청서 양식을 이용하여 수집하고 활용하고 있습니다.<br/>
      피파대낙 서비스 외의 다른 목적으로는 사용되지 않으며 서비스 완료 후 일정시간 뒤에 수집된 비밀번호, 2차 비밀번호는 자동으로 폐기됩니다.
      </div>
      <label><input type="checkbox"/>보상정책 동의(필수)</label>
      <div className="information">
      자사측 실수로 인해 회원님의 계정에 손해를 끼친 경우 다음과 같이 손해BP를 고지된 오늘의 보상시세에 따라 현금으로 보상해드립니다.<br/>
      ※ BP로는 보상해드리지 않습니다. 양해 부탁드리며 이점 확인하시고 신청해주시면 감사하겠습니다<br/><br/>

      1. 해당 쿠폰 사용을 요청하였는데 해당 쿠폰을 미사용한 경우
      - 추후 대낙을 무상으로 재진행하여 미사용한 해당 쿠폰을 회원님이 원하시는 다른 선수에 사용 후 원래 요청하셨던 내용대로 쿠폰 사용시 할인BP와 실제 사용된 쿠폰 할인BP의 차이를 계산하여 손해BP를 고지된 오늘의 보상시세에 따라 현금으로 보상해드립니다.<br/><br/>

      2. 해당 쿠폰 사용을 요청하였는데 다른 쿠폰을 사용한 경우
      - 추후 대낙을 무상으로 재진행하여 해당 쿠폰을 회원님이 원하시는 다른 선수에 사용 후 원래 요청하셨던 내용대로 쿠폰 사용시 할인BP와 실제 사용된 쿠폰 할인BP의 차이를 계산하여 손해BP를 고지된 오늘의 보상시세에 따라 현금으로 보상해드립니다.<br/><br/>

      3. 전체 50, 40, 35프로 쿠폰 사용을 요청하지 않았는데 전체 50, 40, 35프로 쿠폰을 사용한 경우<br/>
      - 추후 대낙을 무상으로 재진행하여 전체 50, 40, 35프로 쿠폰의 유효기간 내 전체 50, 40, 35프로 쿠폰 사용을 원하는 선수를 판매 후 보유하신 전체 30프로 쿠폰을 사용 후 원래 요청하셨던 내용대로 쿠폰 사용시 할인BP와 실제 사용된 쿠폰 할인BP의 차이를 계산하여 손해BP를 고지된 오늘의 보상시세에 따라 현금으로 보상해드립니다. 이 항목이 2번 항목보다 우선적으로 적용됩니다.<br/><br/>

      4. PC방 접속만으로 신청을 하였으나 대낙이 진행된 경우
      - 보유하신 쿠폰 중 원래 사용하기를 원하셨던 내용대로 쿠폰 사용시 할인BP를 계산하고 해당 내용에 따라 미사용된 쿠폰을 확인 후 손해BP를 고지된 오늘의 보상시세에 따라 현금으로 보상해드립니다.<br/><br/>

      5. 쿠폰 사용 내용에 요청주신대로 최대한 진행을 해드리오나 요청하신 쿠폰과 할인율은 같고 사용기한 또는 종류가 다른 쿠폰을 사용한 경우<br/>
      - 손해BP 책정이 어려운 관계로 현금보상은 하지 않고 자사측 실수로 심려를 끼쳐드린 점에 대해 사과의 의미로 잘못 사용된 쿠폰 1개당 무료대낙 1회를 제공해드립니다.<br/><br/>

      6. 탑클래스 대신 구매를 요청 및 결재하였는데 탑클래스 미구매 상태에서 대낙을 완료한 경우<br/>
      - 해당회차 전체 선수 판매BP의 이적시장 수수료의 20%를 고지된 오늘의 보상시세에 따라 현금 보상해드립니다.<br/><br/>

      7. 탑클래스 대신 구매를 요청 및 결재하였는데 탑클래스 구매 후 미적용 상태에서 대낙을 완료한 경우<br/>
      - 이 경우에는 게임사에서 보관함에 탑클이 있는 경우 손해BP를 보상해주고 있기 때문에 자사측에서 직접 게임사에 문의하여 보상을 받으실 수 있도록 조치해드립니다. 만약 게임사에서 보상을 해주지 않는 경우, 자사에서 해당회차 전체 선수 판매BP의 이적시장 수수료의 20%를 고지된 오늘의 보상시세에 따라 현금으로 보상해드립니다.<br/>
      게임사에서 보상을 받으시는 경우, 자사측 실수로 심려를 끼쳐드린 점에 대해 사과의 의미로 무료대낙 3회 제공해드립니다.<br/><br/>

      8. 탑클래스 보관함에서 사용을 요청 및 결재하였는데 탑클래스 미적용 상태에서 대낙을 완료한 경우<br/>
      - 이 경우에는 게임사에서 보관함에 탑클이 있는 경우 손해BP를 보상해주고 있기 때문에 자사측에서 직접 게임사에 문의하여 보상을 받으실 수 있도록 조치해드립니다. 만약 게임사에서 보상을 해주지 않는 경우, 자사에서 해당회차 전체 선수 판매BP의 이적시장 수수료의 20%를 고지된 오늘의 보상시세에 따라 현금으로 보상해드립니다.<br/>
      게임사에서 보상을 받으시는 경우, 자사측 실수로 심려를 끼쳐드린 점에 대해 사과의 의미로 무료대낙 3회 제공해드립니다.<br/><br/>

      9. 탑클래스 보유 여부를 있음으로 체크했지만 탑클래스가 없는 경우 대낙이 진행되더라도 발생하는 어떠한 손해에 대해서도 보상하지 않습니다. 최초 신청서를 정확하게 작성 부탁드립니다.<br/><br/>

      10. 쿠폰 사용 갯수랑 쿠폰 사용 내용이 다른 경우 대낙이 진행되더라도 발생하는 어떠한 손해에 대해서도 보상하지 않습니다. 최초 신청서를 정확하게 작성 부탁드립니다.<br/><br/>

      11. 신청서 내용대로 진행을 해드리며 내용 변경 시 입금 전에 기존 신청서를 취소 요청하시고 신청서를 재작성해주셔야 합니다. 신청하신 내용과 실제 내용이 다른 경우 대낙이 진행되더라도 발생하는 어떠한 손해에 대해서도 보상하지 않습니다. 최초 신청서를 정확하게 작성 부탁드립니다.<br/><br/>

      12. 대낙 진행중 1:1대화로 신청내용 변경을 요청주신 경우 대낙 작업자가 집중해서 대낙을 진행하기 때문에 1:1대화 확인을 못할 수도 있습니다. 그런 경우에도 신청서 내용대로 대낙이 진행되더라도 발생하는 어떠한 손해에 대해서도 보상하지 않습니다. 최초 신청서를 정확하게 작성 부탁드립니다.
      </div>
      <label><input type="checkbox"/>쿠키 사용에 대한 동의(선택) (<a className="cookie" href="/">쿠키란?</a>)</label>
      <div className="information">
      회원님의 피파대낙닷컴 사용상 편의를 위해 쿠키 사용에 동의를 구하고 있습니다. 쿠키 사용에 동의하시면 추후 재방문시 현재 디바이스에 기본적인 정보 사항이 저장되어 나타납니다.
      </div>
      <div><img className="chart" src={chart}/>오늘의 보상시세</div>
      <span className="today">1억BP당 800원 보상</span>
      </div>
      <div className="BlueForm">
      <div className="receipt">
        <div className="more">결제 상세</div>
        <div className="money"><span>기본 요금</span><span>1100원</span></div>
        <div className="money"><span>할인<button className="discount">할인권 목록 열기</button></span><span>-0원</span></div>
        <div className="FinalMoney"><span>최종 요금</span><span>1100원</span></div>
      </div>
      </div>
      <div className="GrayForm">
        <h3>입금하실 금액</h3>
        <input className="account" type="text" value="1100원"/>
        <h3>입금 계좌번호</h3>
        <div className="bank"><input className="account" type="text" value="부산은행 113-2014-3519-00 (주)게임인스"/><button>복사</button></div>
      </div>
      <button className="go">신청하기</button>
      <img src={sale}/>
      <a className="application" href="/">홈 화면에 바로가기를 설치하고 빠르게 대낙을 받아보세요!</a>
      <br/><br/><br/><br/>
      <Footer/>
    </div>
  )
}

export default Main;