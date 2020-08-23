import React, { Component } from "react";

import { NEWS, HITS } from "./constants";
import Post from "../post";
import Input from "../Input/Input";
import Select from "../Select/Select";
import Title from '../Title/Title';

class Posts extends Component {
  state = {
    searchQuery: "",
    hitsPerPage: 20,
    page: 0,
  };

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      searchQuery: value,
    });
  };

  handleHitsChange = ({ target: { value } }) => {
    this.setState({
      hitsPerPage: +value,
      page: 0,
    });
  };

  getSearch = ({ key }) => {
    if (key === "Enter") {
      this.setState({
        page: 0,
      });
    }
  };

  render() {
    const { searchQuery, hitsPerPage } = this.state;

    return (
      <div className="wrapper">
        <Title title="Hacker News" />
        <Select
          options={HITS}
          handleChange={this.handleHitsChange}
          value={hitsPerPage}
        />
        <Input
          onKeyPress={this.getSearch}
          onChange={this.handleInputChange}
          value={searchQuery}
        />
        <ul className="newsList">
          {NEWS.map(
            ({
              author,
              created_at,
              num_comments,
              objectID,
              title,
              points,
              url,
            }) => (
              <Post
                key={objectID}
                author={author}
                created_at={created_at}
                num_comments={num_comments}
                title={title}
                points={points}
                url={url}
              />
            )
          )}
        </ul>
      </div>
    );
  }
}

export default Posts;