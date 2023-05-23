import {memo} from 'react';

const MyComponent = memo(({count}) => {
    console.log("render my component")

    return(
      <>
       <div>My Component</div>
      </>
    );
}, (prevProps, nextProps) => {
   console.log(prevProps, nextProps);
})  

export default MyComponent;