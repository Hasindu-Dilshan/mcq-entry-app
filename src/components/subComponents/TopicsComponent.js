const TopicsComponent = () => {
  return (
    <div className="form-group">
      <div className="dropdown">
        <select className="select" defaultValue={'3'}>
          <option value='1'>
            01.&nbsp;මිනුම
          </option>
          <option  value='2'>
            02.&nbsp;යාන්ත්‍ර විද්‍යාව
          </option>
          <option  value='3'>
            03.&nbsp;දෝලන හා තරංග
          </option>
          <option  value='4'>
            04.&nbsp;තාප භෞතිකය
          </option>
          <option  value='5'>
            05.&nbsp;ගුරුත්වජ ක්ෂේත්‍ර
          </option>
          <option  value='6'>
            06.&nbsp;ස්ථිති විද්‍යුත් ක්ෂේත්‍ර
          </option>
          <option  value='7'>
            07.&nbsp;චුම්බක ක්ෂේත්‍ර
          </option>
          <option  value='8'>
            08.&nbsp;ධාරා විද්‍යුතය
          </option>
          <option  value='9'>
            09.&nbsp;ඉලෙක්ට්‍රොනික විද්‍යාව
          </option>
          <option  value='10'>
            10.&nbsp;පදාර්ථයේ යාන්ත්‍රික ගුණ
          </option>
          <option  value='11'>
            &nbsp;11.&nbsp;පදාර්ථ හා විකිරණ
          </option>
        </select>
      </div>
    </div>
  );
};

export default TopicsComponent;
