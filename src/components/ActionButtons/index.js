function ActionButtons({ questionsLength, step }) {
  const isLast = questionsLength - 1 === step;

  return (
    <div>
      {/* 스텝넘버가 0이라면 이전버튼은 노출되지않고 0 다음 숫자일 경우 이전버튼 그리기 */}
      {step === 0 || <button>이전</button>}
      {/* isLast에있는 questionsLength가 마지막번호가 아니라면 다음버튼이 보여지고 마지막번호라면 제출번호 그리기 */}
      {isLast ? <button>제출</button> : <button>다음</button>}
    </div>
  );
}

export default ActionButtons;
