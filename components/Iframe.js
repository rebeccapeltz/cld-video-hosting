// for iframes from servers you trust

export default function Iframe(props) {
  return (
    <div className="sandbox" 
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
}



