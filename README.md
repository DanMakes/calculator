# Rails + React Compound Interest Calculator

A browser-based compound interest calculator. The calculator takes a base amount (€), a regular monthly deposit (€), an annual interest rate (%, compounded monthly) and a calculation period (years).

The calculator outputs the results as a graph, which can be converted to different currencies once rendered. The currency conversion relies on [Fixer](https://fixer.io/).

## Tech Stack

### Core

* [Ruby 2.5.1](https://github.com/ruby/ruby)
* [Rails 5.2.0](https://github.com/rails/rails) (run in --api mode)
* [React 16](https://github.com/facebook/react)
* [Redux](https://github.com/reactjs/redux)
* [Redux-sagas](https://github.com/redux-saga/redux-saga)
* [Reselect](https://github.com/reactjs/reselect)
* [ImmutableJS](https://github.com/facebook/immutable-js/)
* [Styled Components](https://github.com/styled-components/styled-components)
* [Recharts](https://github.com/recharts/recharts)

### Testing

* [Jest](https://github.com/facebook/jest/)
* [Enzyme](https://github.com/airbnb/enzyme)
* [MiniTest](https://github.com/seattlerb/minitest)

### Linting

* [Eslint](https://github.com/eslint/eslint)

## Project Structure

The application was created using `rails new --api` and follows the standard rails folder structure, with the addition of a `/frontend` folder. That's where all the React-related code.

The project uses [container/component architecture](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

Container/component architecture in short:

* `containers/` contains components which are connected to the redux store.
* `components/` contains "dumb" components which depend on containers for data.

## Setup

1.  Download / clone the repository
2.  `cd` into the directory
3.  Run `ruby -v` and `rails -v` to ensure that you have Ruby and Rails installed.  
    The versions used in this project are listed above.  
    If you don't have Ruby or Rails installed or you have the wrong version, I recommend using [RVM](https://rvm.io/rvm/).
4.  Install all the gems and depencies
    * Run `bundle install`
    * Run `yarn` (If you don't have [yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable) installed it can be installed with [Homebrew](https://brew.sh/))
5.  Run `webpack -d` to ensure all the javascript files have been bundled and are up to date
6.  Start the Rails server `rails s`
7.  You're app should now be running on `localhost:3000`

(Run `webpack -w` to watch your javascript files during development.)

## Linting

To run the linter once:

```
$ yarn lint
```

To run the watch task:

```
$ yarn lint:watch
```

The above uses eslint and eslint-watch.

## Testing

Javascript

```
$ yarn test
```

Rails

```
$ rake test
```

## Notes on Calculations

The compound calculations can be found in `calculator_controller`.

For clarity, values used for calculations are as follows

* Base Amount
* Regular **Monthly** Deposit
* **Annual** Interest Rate (compounded **Monthly**)
* Calculation Period (in **Years**)

There are various ways to go about things, and the two main factors to take into consideration are

* When do you calculate your interest (before / after deposit has been made)
* When do you make deposit (beginning / end of compounding period

That effectively results in four different combinations to base your calculations / formula on.

#### The example provided assumes the following:

* The contribution is made at the end of the month
* The monthly contribution is added to the accumulative total **before** the interest calculation is made

I decided to play it safe and stick with the example.

#### Basic Formula

0 = x MonthlyTotals[x] = BaseAmount  
1 < x MonthlyTotals[x] = (MonthlyTotals[x-1] + MonthlyDeposit) x ((1 + InterestRate) / 12)
