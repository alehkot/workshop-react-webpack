'use strict';

require('../../styles/View.css');

var React = require('react/addons');
var ReactBootstrap = require('react-bootstrap');
var Router = require('react-router');

var articles = require('./../models/articles');
var _ = require('underscore');

var Name = require('./Name');

var View = React.createClass({
    getInitialState() {
        return {
            articles: articles
        };
    },
    addArticle() {
        articles.addNew();
    },
    componentDidMount() {
        this.state.articles.updated.add(() => this.setState({
            articles: articles
        }));
    },
    onKeyDown(event) {
        if (event.keyCode === 13) {
            this.state.articles.updateArticle();
        }
    },
    render() {
        var list = _.map(articles.all, article =>               
                <div key={article.id} className="panel panel-default">
                    <div className="panel-heading">
                        <Name id={article.id} name={article.name} isEditingName={article.isEditingName} />
                        {/*&nbsp;<Router.Link to={'/edit/' + article.id}>edit</Router.Link>*/}
                    </div>
                    <div className="panel-body">{article.text.substr(0, 80)}&hellip;</div>
                </div>
        );

        //var div = onClickNeeded? <div onClick={}></div> : <div></div>;
        // then use {div}

        return (
            <ReactBootstrap.Panel header="View articles">            
                <ReactBootstrap.Button onClick={this.addArticle}>Add</ReactBootstrap.Button>
                {list}
            </ReactBootstrap.Panel>
        );
    }
});

module.exports = View;
