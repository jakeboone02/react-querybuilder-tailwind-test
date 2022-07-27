import { Field, QueryBuilder, RuleGroupType } from 'react-querybuilder';
import './App.css';

const fields: Field[] = [
  { name: 'firstName', label: 'First Name' },
  { name: 'lastName', label: 'Last Name' },
];

const defaultQuery: RuleGroupType = {
  combinator: 'and',
  rules: [
    {
      field: 'firstName',
      operator: 'beginsWith',
      value: 'Stev',
    },
    {
      combinator: 'or',
      rules: [
        {
          field: 'lastName',
          operator: '=',
          value: 'Vai',
        },
        {
          field: 'lastName',
          operator: '=',
          value: 'Vaughan',
        },
      ],
    },
  ],
};

const App = () => (
  <div>
    <h2 className="font-bold mb-2 text-sky-700">
      React Query Builder Tailwind Test
    </h2>
    <QueryBuilder
      fields={fields}
      defaultQuery={defaultQuery}
      controlClassnames={{
        queryBuilder: 'rounded-lg bg-sky-600/20 shadow-xl',
        ruleGroup: 'rounded-lg bg-sky-600/20 shadow',
        combinators: 'text-red-600 rounded-l-full p-1',
        addRule: 'bg-white text-orange-600 rounded-none p-1 shadow',
        addGroup: 'bg-white text-yellow-600 rounded-r-full p-1 shadow',
        fields: 'bg-white text-green-600 rounded-l-full p-1 shadow',
        operators: 'bg-white text-blue-600 rounded-none p-1 shadow',
        value: 'bg-white text-purple-600 rounded-r-full p-1 shadow w-32',
        removeGroup: 'text-[#006699]/50 p-1 ml-auto',
        removeRule: 'text-[#006699]/50 p-1 ml-auto',
      }}
    />
  </div>
);

export default App;
