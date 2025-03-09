exports.getData = (req, res) => {
    const data=[{name:'sonu',age:29,address:"india"},{name:'jash',age:39,address:"uk"},{name:'david',age:35,address:"uttrakhand"}]
    console.log('hello get data');
    res.send({ data: data });
  };
  
  exports.postData = (req, res) => {
    const receivedData = req.body;
    res.send({ message: 'POST request received', data: receivedData });
  };