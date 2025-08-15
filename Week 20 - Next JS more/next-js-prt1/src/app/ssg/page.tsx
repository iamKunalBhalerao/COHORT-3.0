export default function ssg() {
  return (
    <div>
      <h1>This is Statically generated page.</h1>
      <p>
        Because their is no server side logic is running on this page or no
        client side rendering happening here.
      </p>
      <p>
        This is page as it is go on the browser in the form of Static, not
        changing HTML.
      </p>
    </div>
  );
}
