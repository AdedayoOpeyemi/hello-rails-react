![](https://img.shields.io/badge/Microverse-blueviolet)

# Hello Rails React

This app is developed to show the use of the rails-react gem to build React components as a part of your Rails JavaScript and serve it in a component, react_component, to be used in a regular ERB file.

The main goals for this exercise are:

- Implement a connection between a Ruby on Rails back-end and React front-end.
- Understand the pros and cons of different approaches of connecting Ruby on Rails back-end with React front-end.


## Built With

- Ruby
- Rails
- React-rails gem


## Getting Started

To get a local copy up and running follow these simple example steps.


### Install

To get a local copy up and running follow these simple example steps.
- Open terminal
- Clone this project using the command
```
git clone https://github.com/AdedayoOpeyemi/hello-rails-react.git
```
- Select the folder
```
`cd hello-rails-react`
```
- To install all project dependencies run:
```
bundle install
```
rails webpacker:install         # OR (on rails version < 5.0) rake webpacker:install
rails webpacker:install:react   # OR (on rails version < 5.0) rake webpacker:install:react
rails generate react:install

Setup database 
```
rails db:create
```

Migrate database
```
rails db:migrate
```

- To start the local server run:
```
rails s -p <port number of your choice>
```

To View athe running App

```
http://127.0.0.1:3000/greeting
```


## Authors 👤 

👤 **Opeyemi Oyelesi**

- GitHub: [@AdedayoOpeyemi](https://github.com/AdedayoOpeyemi)
- Twitter: [@Oyelesiopy](https://twitter.com/Oyelesiopy)
- LinkedIn: [Opeyemi Oyelesi](https://linkedin.com/in/opeyemioyelesi)


## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/adedayoopeyemi/hello-rails-react/issues).

## Show your support

Give a ⭐️ if you like this project!


## Acknowledgments

- Hat tip to anyone whose code was used 🔰
- Inspiration 💘
- Microverse program ⚡
- Our standup team 🏹
- Our family's support 🙌

## 📝 License

This project is [MIT](./LICENSE) licensed.

