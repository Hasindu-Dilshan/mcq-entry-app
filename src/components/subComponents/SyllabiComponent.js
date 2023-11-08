const SyllabiComponent = () => {
  return (
    <div className="form-group">
      <div className="dropdown">
        <select className="select" defaultValue={'2'}>
          <option value="1">භෞතික විද්‍යාව 2003 පැරණි නිර්දේෂය</option>
          <option value="2">භෞතික විද්‍යාව 2012 පැරණි නිර්දේෂය</option>
          <option value="3">භෞතික විද්‍යාව 2019 නව නිර්දේෂය</option>
          <option value="4">රසායන විද්‍යාව 2003 පැරණි නිර්දේෂය</option>
          <option value="5">රසායන විද්‍යාව 2012 පැරණි නිර්දේෂය</option>
          <option value="6">රසායන විද්‍යාව 2019 නව නිර්දේෂය</option>
          <option value="7">ජීව විද්‍යාව 2003 පැරණි නිර්දේෂය</option>
          <option value="8">ජීව විද්‍යාව 2012 පැරණි නිර්දේෂය</option>
          <option value="9">ජීව විද්‍යාව 2019 නව නිර්දේෂය</option>
        </select>
      </div>
    </div>
  );
};

export default SyllabiComponent;
