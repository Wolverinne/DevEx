import { useHistory } from "react-router-dom";
import WriteArticleForm from "../Components/Article/WriteArticleForm";

function WriteArticle(){
    const history = useHistory();
    function addWriteHandler(writeArticleData) {
    fetch(
      "https://devex-2ae43-default-rtdb.firebaseio.com/writearticles.json",
      {
        method: "Post",
        body: JSON.stringify(writeArticleData),
        //Converting our array to JSON format using stringify method.
        headers: {
          "Content-Type": "application/json",
          //Content-type is metadata for outgoing request to make it clear that it carries Json data.
        },
      }
      //when promise is fulfiled
    ).then(() => {
      history.replace("/");
      //replace method will navigate us away to required destination and won't allow us to use back button
    });
}
    return(
            <WriteArticleForm onAddWrite={addWriteHandler}>
            </WriteArticleForm>
        
    );
}
export default WriteArticle;