export const range = (start, end, step = 1) => {
    let output = [];
    
    // If end is not provided, assume start is the end and start from 0
    if (typeof end === 'undefined') {
      end = start;
      start = 0;
    }
    
    // Generate the range
    for (let i = start; i < end; i += step) {
      output.push(i);
    }
    
    return output;
  };