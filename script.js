body {
  font-family: sans-serif;
  text-align: center;
  background: #f5f5f5;
  margin: 0;
}

#game {
  margin-top: 40px;
}

#status span {
  margin: 0 10px;
  font-weight: bold;
}

#question {
  font-size: 28px;
  margin: 30px;
}

#choices {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.choice {
  width: 200px;
  margin: 8px;
  padding: 10px;
  background: white;
  border: 2px solid #333;
  cursor: pointer;
}

.choice:hover {
  background: #ddd;
}

.correct {
  background: #8f8 !important;
}

.wrong {
  background: #f88 !important;
}
