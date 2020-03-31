//获取所有用户信息
http://localhost:3000/users

//获取id为1的用户信息
http://localhost:3000/users/1

//获取所有的公司信息
http://localhost:3000/companies

//获取id为1的公司信息
http://localhost:3000/companies/1

//获取公司id为3的用户信息
http://localhost:3000/companies/3/users

//根据公司名字获取公司信息
http://localhost:3000/companies?name=Microsoft&name=Apple

//获取一页中只有两条数据
http://localhost:3000/companies?_page=1&_limit=2

//升降排序 升序asc 降序desc
http://localhost:3000/companies?_sort=name&_order=asc

//获取年龄30及30以上的
http://localhost:3000/users?age_gte=30

//获取年龄30-40之间的用户信息
http://localhost:3000/users?age_gte=30&age_lte=40