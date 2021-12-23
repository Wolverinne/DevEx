import { useHistory } from "react-router-dom";
import RequestArticleForm from "../Components/Article/RequestArticleForm";

//To Navigate away after the form is filled we use usehistory hook.
function RequestArticle() {
  const history = useHistory();
  function addRequestHandler(requestArticleData) {
    fetch(
      "https://devex-2ae43-default-rtdb.firebaseio.com/requestarticles.json",
      {
        method: "Post",
        body: JSON.stringify(requestArticleData),
        //Converting our array to JSON format using stringify method.
        headers: {
          "Content-Type": "application/json",
          //metadata for outgoing request to make it clear that it carries Json data.
        },
      }
      //when promise is fulfiled
    ).then(() => {
      history.replace("/");
      //replace method will navigate us away to required destination and won't allow us to use back button
    });
  }
  return (
    <RequestArticleForm onAddRequest={addRequestHandler}></RequestArticleForm>
  );
}
export default RequestArticle;
