
const List = () => {
  return (
    <div className="lista">
    <ul>
        <li>
        <input type="checkbox" id="option1" />
        <label htmlFor="option1">You can always add new tasks or change the settings of existing ones in your calendar view or the app control panel</label>
        </li>
        <li>
        <input type="checkbox" id="option2" />
        <label htmlFor="option2">It's easy to stay focused on your most important daily activities that will get you closer to meeting your golas</label>
        </li>
        <li>
        <input type="checkbox" id="option3" />
        <label htmlFor="option3">Use phone remiders to free up your long term memory which will reduce stress and make you more productive</label>
        </li>
    </ul>
    </div>
  );
};

export default List
