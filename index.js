const Button = (props) => {
  //  Write your code here.
  const { styling, message } = props;
  return <button className={styling}>{message}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="card-container">
      <Button styling="button1" message="like" />
      <Button styling="button2" message="comment" />
      <Button styling="button3" message="share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
