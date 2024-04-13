import axios from "./gocliRequest"
import * as components from "./appComponents"
export * from "./appComponents"

/**
 * @description "添加文章"
 * @param req
 */
export function PostBackV1ArticleAdd(req: components.ArticleAddBackReq) {
	return axios.post<components.ArticleOkBackReply>(`/back/v1/article/add`, req)
}

/**
 * @description "删除文章"
 * @param req
 */
export function PostBackV1ArticleDelete(req: components.ArticleDeleteBackReq) {
	return axios.post<components.ArticleOkBackReply>(`/back/v1/article/delete`, req)
}

/**
 * @description "获取文章信息"
 * @param params
 */
export function GetBackV1ArticleGet(params: components.ArticleGetBackReqParams) {
	return axios.get<components.CmsArticle>(`/back/v1/article/get`, params)
}

/**
 * @description "文章列表"
 * @param params
 */
export function GetBackV1ArticleList(params: components.ArticleListBackReqParams) {
	return axios.get<components.ArticleListBackReply>(`/back/v1/article/list`, params)
}

/**
 * @description "更改状态"
 * @param req
 */
export function PostBackV1ArticleStatusChange(req: components.ArticleChangeStatusBackReq) {
	return axios.post<components.ArticleOkBackReply>(`/back/v1/article/status/change`, req)
}

/**
 * @description "编辑文章"
 * @param req
 */
export function PostBackV1ArticleUpdate(req: components.ArticleAddBackReq) {
	return axios.post<components.ArticleOkBackReply>(`/back/v1/article/update`, req)
}

/**
 * @description "获取文章信息"
 * @param params
 */
export function GetFrontV1ArticleGet(params: components.ArticleGetFrontReqParams) {
	return axios.get<components.CmsArticle>(`/front/v1/article/get`, params)
}

/**
 * @description "文章列表"
 * @param params
 */
export function GetFrontV1ArticleList(params: components.ArticleListFrontReqParams) {
	return axios.get<components.ArticleListFrontReply>(`/front/v1/article/list`, params)
}

/**
 * @description "我的未读数量"
 * @param params
 */
export function GetFrontV1ArticleUnreadNumber(params: components.ArticleUnreadNumberFrontReqParams) {
	return axios.get<components.ArticleUnreadNumberFrontReply>(`/front/v1/article/unread/number`, params)
}

/**
 * @description "设置内容已读"
 * @param req
 */
export function PostFrontV1ArticleRead(req: components.ArticleReadFrontReq) {
	return axios.post<components.ArticleReadFrontReply>(`/front/v1/article/read`, req)
}

/**
 * @description "添加文章分类"
 * @param req
 */
export function PostBackV1CategoryAdd(req: components.CategoryAddBackReq) {
	return axios.post<components.CategoryOkBackReply>(`/back/v1/category/add`, req)
}

/**
 * @description "删除文章分类"
 * @param params
 */
export function PostBackV1CategoryDeleteId(params: components.CategoryGetBackReqParams, id: number) {
	return axios.post<components.CategoryOkBackReply>(`/back/v1/category/delete/${id}`, params)
}

/**
 * @description "获取文章分类信息"
 * @param params
 */
export function GetBackV1CategoryGetId(params: components.CategoryGetBackReqParams, id: number) {
	return axios.get<components.CmsCategory>(`/back/v1/category/get/${id}`, params)
}

/**
 * @description "文章分类列表"
 * @param params
 */
export function GetBackV1CategoryList(params: components.CategoryListBackReqParams) {
	return axios.get<components.CategoryListBackReply>(`/back/v1/category/list`, params)
}

/**
 * @description "文章分类分层级列表"
 */
export function GetBackV1CategoryListLevel() {
	return axios.get<components.CategoryListLevelBackReply>(`/back/v1/category/list/level`)
}

/**
 * @description "更改文章分类状态"
 * @param req
 */
export function PostBackV1CategoryStatusChange(req: components.CategoryChangeStatusReq) {
	return axios.post<components.CategoryOkBackReply>(`/back/v1/category/status/change`, req)
}

/**
 * @description "编辑文章分类"
 * @param req
 */
export function PostBackV1CategoryUpdate(req: components.CategoryAddBackReq) {
	return axios.post<components.CategoryOkBackReply>(`/back/v1/category/update`, req)
}

/**
 * @description "获取文章分类信息"
 * @param params
 */
export function GetFrontV1CategoryGet(params: components.CategoryGetFrontReqParams) {
	return axios.get<components.CmsCategory>(`/front/v1/category/get`, params)
}

/**
 * @description "获取文章分类的子分类列表"
 * @param params
 */
export function GetFrontV1CategorySub(params: components.CategorySubFrontReqParams) {
	return axios.get<components.CategorySubFrontReply>(`/front/v1/category/sub`, params)
}

/**
 * @description "获取算术验证码"
 */
export function GetMixV1CaptchaMath() {
	return axios.get<components.CaptchaGetMathMixReply>(`/mix/v1/captcha/math`)
}

/**
 * @description "获取文本验证码"
 */
export function GetMixV1CaptchaText() {
	return axios.get<components.CaptchaGetTextMixReply>(`/mix/v1/captcha/text`)
}

/**
 * @description "获取验证码图片"
 * @param params
 */
export function GetMixV1CaptchaVerify(params: components.CaptchaVerifyMixReqParams) {
	return axios.get<components.CaptchaVerifyMixReply>(`/mix/v1/captcha/verify`, params)
}

/**
 * @description "获取短信验证码"
 * @param params
 */
export function GetMixV1SmsSend(params: components.SmsSendMixReqParams) {
	return axios.get<components.SmsSendMixReply>(`/mix/v1/sms/send`, params)
}

/**
 * @description "登录用户获取短信验证码"
 * @param params
 */
export function GetMixV1SmsUserSend(params: components.SmsUserSendMixReqParams) {
	return axios.get<components.SmsSendMixReply>(`/mix/v1/sms/user/send`, params)
}

/**
 * @description "获取oss上传sts"
 */
export function GetBackV1UploadOssSts() {
	return axios.get<components.OssStsMixReply>(`/back/v1/upload/oss/sts`)
}

/**
 * @description "获取oss上传sts"
 */
export function GetFrontV1UploadOssSts() {
	return axios.get<components.OssStsMixReply>(`/front/v1/upload/oss/sts`)
}

/**
 * @description "添加捡漏账号"
 * @param req
 */
export function PostBackV1PickAccountAdd(req: components.AccountAddBackReq) {
	return axios.post<components.AccountAddBackReply>(`/back/v1/pick/account/add`, req)
}

/**
 * @description "获取当前登录的捡漏信息"
 */
export function GetBackV1PickAccountCurrent() {
	return axios.get<components.PmsAccount>(`/back/v1/pick/account/current`)
}

/**
 * @description "删除捡漏"
 * @param params
 */
export function PostBackV1PickAccountDeleteId(params: components.AccountDeleteBackReqParams, id: number) {
	return axios.post<components.AccountDeleteBackReply>(`/back/v1/pick/account/delete/${id}`, params)
}

/**
 * @description "获取捡漏信息"
 * @param params
 */
export function GetBackV1PickAccountGetId(params: components.AccountGetBackReqParams, id: number) {
	return axios.get<components.PmsAccount>(`/back/v1/pick/account/get/${id}`, params)
}

/**
 * @description "捡漏列表"
 * @param params
 */
export function GetBackV1PickAccountList(params: components.AccountListBackReqParams) {
	return axios.get<components.AccountListBackReply>(`/back/v1/pick/account/list`, params)
}

/**
 * @description "更改捡漏状态"
 * @param req
 */
export function PostBackV1PickAccountStatusChange(req: components.AccountChangeStatusBackReq) {
	return axios.post<components.AccountChangeStatusBackReply>(`/back/v1/pick/account/status/change`, req)
}

/**
 * @description "编辑捡漏信息"
 * @param req
 */
export function PostBackV1PickAccountUpdate(req: components.AccountUpdateBackReq) {
	return axios.post<components.AccountUpdateBackReply>(`/back/v1/pick/account/update`, req)
}

/**
 * @description "更新插入捡漏信息"
 * @param req
 */
export function PostBackV1PickAccountUpsert(req: components.AccountUpsertBackReq) {
	return axios.post<components.AccountUpsertBackReply>(`/back/v1/pick/account/upsert`, req)
}

/**
 * @description "管理员登录"
 * @param req
 */
export function PostBackV1AdminLogin(req: components.AdminLoginBackReq) {
	return axios.post<components.JwtTokenBack>(`/back/v1/admin/login`, req)
}

/**
 * @description "管理员手机号登录"
 * @param req
 */
export function PostBackV1AdminLoginMobile(req: components.AdminMobileLoginBackReq) {
	return axios.post<components.JwtTokenBack>(`/back/v1/admin/login/mobile`, req)
}

/**
 * @description "管理员简单登录"
 * @param req
 */
export function PostBackV1AdminLoginSimple(req: components.AdminLoginSimpleBackReq) {
	return axios.post<components.JwtTokenBack>(`/back/v1/admin/login/simple`, req)
}

/**
 * @description "获取当前登录的管理员信息"
 * @param req
 */
export function GetBackV1AdminCurrentUpdate(req: components.CurrentAdminUpdateBackReq) {
	return axios.get<components.AdminOkBackReply>(`/back/v1/admin/current/update`, req)
}

/**
 * @description "添加管理员"
 * @param req
 */
export function PostBackV1AdminAdd(req: components.AdminAddBackReq) {
	return axios.post<components.AdminOkBackReply>(`/back/v1/admin/add`, req)
}

/**
 * @description "更新管理员密码"
 * @param req
 */
export function PostBackV1AdminChangePassword(req: components.AdminChangePasswordBackReq) {
	return axios.post<components.AdminOkBackReply>(`/back/v1/admin/change/password`, req)
}

/**
 * @description "获取当前登录的管理员信息"
 */
export function GetBackV1AdminCurrent() {
	return axios.get<components.SysAdmin>(`/back/v1/admin/current`)
}

/**
 * @description "删除管理员"
 * @param params
 */
export function PostBackV1AdminDeleteId(params: components.AdminGetBackReqParams, id: number) {
	return axios.post<components.AdminOkBackReply>(`/back/v1/admin/delete/${id}`, params)
}

/**
 * @description "获取管理员信息"
 * @param params
 */
export function GetBackV1AdminGetId(params: components.AdminGetBackReqParams, id: number) {
	return axios.get<components.SysAdmin>(`/back/v1/admin/get/${id}`, params)
}

/**
 * @description "管理员列表"
 * @param params
 */
export function GetBackV1AdminList(params: components.AdminListBackReqParams) {
	return axios.get<components.AdminListBackReply>(`/back/v1/admin/list`, params)
}

/**
 * @description "管理员拥有的菜单列表"
 */
export function GetBackV1AdminMenuList() {
	return axios.get<components.AdminMenuListBackReply>(`/back/v1/admin/menu/list`)
}

/**
 * @description "更改管理员状态"
 * @param req
 */
export function PostBackV1AdminStatusChange(req: components.AdminChangeStatusReq) {
	return axios.post<components.AdminOkBackReply>(`/back/v1/admin/status/change`, req)
}

/**
 * @description "编辑管理员信息"
 * @param req
 */
export function PostBackV1AdminUpdate(req: components.AdminAddBackReq) {
	return axios.post<components.AdminOkBackReply>(`/back/v1/admin/update`, req)
}

/**
 * @description "管理员操作日志列表"
 * @param params
 */
export function GetBackV1AdminLogList(params: components.AdminLogListBackReqParams) {
	return axios.get<components.AdminLogListBackReply>(`/back/v1/admin/log/list`, params)
}

/**
 * @description "删除配置"
 * @param params
 */
export function PostBackV1ConfigDeleteKey(params: components.ConfigGetReqParams, key: string) {
	return axios.post<components.ConfigOkBackReply>(`/back/v1/config/delete/${key}`, params)
}

/**
 * @description "获取配置信息"
 * @param params
 */
export function GetBackV1ConfigGetKey(params: components.ConfigGetReqParams, key: string) {
	return axios.get<components.SysConfig>(`/back/v1/config/get/${key}`, params)
}

/**
 * @description "配置列表"
 * @param params
 */
export function GetBackV1ConfigList(params: components.ConfigListBackReqParams) {
	return axios.get<components.ConfigListBackReply>(`/back/v1/config/list`, params)
}

/**
 * @description "更新配置"
 * @param req
 */
export function PostBackV1ConfigSet(req: components.ConfigSetBackReq) {
	return axios.post<components.ConfigOkBackReply>(`/back/v1/config/set`, req)
}

/**
 * @description "批量更新配置"
 * @param req
 */
export function PostBackV1ConfigSets(req: components.ConfigSetsBackReq) {
	return axios.post<components.ConfigOkBackReply>(`/back/v1/config/sets`, req)
}

/**
 * @description "获取配置信息"
 * @param params
 */
export function GetFrontV1ConfigGetKey(params: components.ConfigGetReqParams, key: string) {
	return axios.get<components.SysConfig>(`/front/v1/config/get/${key}`, params)
}

/**
 * @description "删除字典"
 * @param params
 */
export function PostBackV1DictDeleteCode(params: components.DictGetReqParams, code: string) {
	return axios.post<components.DictOkBackReply>(`/back/v1/dict/delete/${code}`, params)
}

/**
 * @description "获取字典信息"
 * @param params
 */
export function GetBackV1DictGetCode(params: components.DictGetReqParams, code: string) {
	return axios.get<components.SysDict>(`/back/v1/dict/get/${code}`, params)
}

/**
 * @description "字典列表"
 * @param params
 */
export function GetBackV1DictList(params: components.DictListBackReqParams) {
	return axios.get<components.DictListBackReply>(`/back/v1/dict/list`, params)
}

/**
 * @description "更新字典"
 * @param req
 */
export function PostBackV1DictSet(req: components.DictSetBackReq) {
	return axios.post<components.DictOkBackReply>(`/back/v1/dict/set`, req)
}

/**
 * @description "获取字典信息"
 * @param params
 */
export function GetFrontV1DictGetCode(params: components.DictGetFrontReqParams, code: string) {
	return axios.get<components.SysDict>(`/front/v1/dict/get/${code}`, params)
}

/**
 * @description "获取字典列表"
 * @param params
 */
export function GetFrontV1DictList(params: components.DictListFrontReqParams) {
	return axios.get<components.DictListFrontReply>(`/front/v1/dict/list`, params)
}

/**
 * @description "添加菜单"
 * @param req
 */
export function PostBackV1MenuAdd(req: components.MenuAddBackReq) {
	return axios.post<components.MenuOkBackReply>(`/back/v1/menu/add`, req)
}

/**
 * @description "删除菜单"
 * @param params
 */
export function PostBackV1MenuDeleteId(params: components.MenuGetBackReqParams, id: number) {
	return axios.post<components.MenuOkBackReply>(`/back/v1/menu/delete/${id}`, params)
}

/**
 * @description "获取菜单信息"
 * @param params
 */
export function GetBackV1MenuGetId(params: components.MenuGetBackReqParams, id: number) {
	return axios.get<components.SysMenu>(`/back/v1/menu/get/${id}`, params)
}

/**
 * @description "菜单列表"
 * @param params
 */
export function GetBackV1MenuList(params: components.MenuListBackReqParams) {
	return axios.get<components.MenuListBackReply>(`/back/v1/menu/list`, params)
}

/**
 * @description "菜单分层级列表"
 */
export function GetBackV1MenuListLevel() {
	return axios.get<components.MenuListLevelBackReply>(`/back/v1/menu/list/level`)
}

/**
 * @description "更改菜单状态"
 * @param req
 */
export function PostBackV1MenuStatusChange(req: components.MenuChangeStatusReq) {
	return axios.post<components.MenuOkBackReply>(`/back/v1/menu/status/change`, req)
}

/**
 * @description "编辑菜单"
 * @param req
 */
export function PostBackV1MenuUpdate(req: components.MenuAddBackReq) {
	return axios.post<components.MenuOkBackReply>(`/back/v1/menu/update`, req)
}

/**
 * @description "添加权限"
 * @param req
 */
export function PostBackV1PermissionAdd(req: components.PermissionAddBackReq) {
	return axios.post<components.PermissionOkBackReply>(`/back/v1/permission/add`, req)
}

/**
 * @description "删除权限"
 * @param params
 */
export function PostBackV1PermissionDeleteId(params: components.PermissionGetBackReqParams, id: number) {
	return axios.post<components.PermissionOkBackReply>(`/back/v1/permission/delete/${id}`, params)
}

/**
 * @description "获取权限信息"
 * @param params
 */
export function GetBackV1PermissionGetId(params: components.PermissionGetBackReqParams, id: number) {
	return axios.get<components.SysPermission>(`/back/v1/permission/get/${id}`, params)
}

/**
 * @description "权限列表"
 * @param params
 */
export function GetBackV1PermissionList(params: components.PermissionListBackReqParams) {
	return axios.get<components.PermissionListBackReply>(`/back/v1/permission/list`, params)
}

/**
 * @description "权限分层级列表"
 */
export function GetBackV1PermissionListLevel() {
	return axios.get<components.PermissionListLevelBackReply>(`/back/v1/permission/list/level`)
}

/**
 * @description "更改权限状态"
 * @param req
 */
export function PostBackV1PermissionStatusChange(req: components.PermissionChangeStatusReq) {
	return axios.post<components.PermissionOkBackReply>(`/back/v1/permission/status/change`, req)
}

/**
 * @description "编辑权限"
 * @param req
 */
export function PostBackV1PermissionUpdate(req: components.PermissionAddBackReq) {
	return axios.post<components.PermissionOkBackReply>(`/back/v1/permission/update`, req)
}

/**
 * @description "添加角色"
 * @param req
 */
export function PostBackV1RoleAdd(req: components.RoleAddBackReq) {
	return axios.post<components.RoleOkBackReply>(`/back/v1/role/add`, req)
}

/**
 * @description "绑定角色菜单"
 * @param req
 */
export function PostBackV1RoleBindMenu(req: components.RoleBindMenuBackReq) {
	return axios.post<components.RoleOkBackReply>(`/back/v1/role/bind/menu`, req)
}

/**
 * @description "绑定角色权限"
 * @param req
 */
export function PostBackV1RoleBindPermission(req: components.RoleBindPermissionBackReq) {
	return axios.post<components.RoleOkBackReply>(`/back/v1/role/bind/permission`, req)
}

/**
 * @description "删除角色"
 * @param params
 */
export function PostBackV1RoleDeleteId(params: components.RoleGetBackReqParams, id: number) {
	return axios.post<components.RoleOkBackReply>(`/back/v1/role/delete/${id}`, params)
}

/**
 * @description "获取角色信息"
 * @param params
 */
export function GetBackV1RoleGetId(params: components.RoleGetBackReqParams, id: number) {
	return axios.get<components.SysRole>(`/back/v1/role/get/${id}`, params)
}

/**
 * @description "角色列表"
 * @param params
 */
export function GetBackV1RoleList(params: components.RoleListBackReqParams) {
	return axios.get<components.RoleListBackReply>(`/back/v1/role/list`, params)
}

/**
 * @description "角色下的菜单列表"
 * @param params
 */
export function GetBackV1RoleMenus(params: components.RoleMenusBackReqParams) {
	return axios.get<components.RoleMenusBackReply>(`/back/v1/role/menus`, params)
}

/**
 * @description "角色下的权限列表"
 * @param params
 */
export function GetBackV1RolePermission(params: components.RolePermissionsBackReqParams) {
	return axios.get<components.RolePermissionsBackReply>(`/back/v1/role/permission`, params)
}

/**
 * @description "更改角色状态"
 * @param req
 */
export function PostBackV1RoleStatusChange(req: components.RoleChangeStatusReq) {
	return axios.post<components.RoleOkBackReply>(`/back/v1/role/status/change`, req)
}

/**
 * @description "编辑角色"
 * @param req
 */
export function PostBackV1RoleUpdate(req: components.RoleAddBackReq) {
	return axios.post<components.RoleOkBackReply>(`/back/v1/role/update`, req)
}

/**
 * @description "反馈列表"
 * @param params
 */
export function GetBackV1FeedbackList(params: components.FeedbackListBackReqParams) {
	return axios.get<components.FeedbackListBackReply>(`/back/v1/feedback/list`, params)
}

/**
 * @description "反馈处理"
 * @param req
 */
export function PostBackV1FeedbackReply(req: components.FeedbackReplyBackReq) {
	return axios.post<components.FeedbackReplyBackReply>(`/back/v1/feedback/reply`, req)
}

/**
 * @description "反馈信息"
 * @param req
 */
export function PostFrontV1FeedbackAdd(req: components.FeebackAddFrontReq) {
	return axios.post<components.FeebackAddFrontReply>(`/front/v1/feedback/add`, req)
}

/**
 * @description "我的反馈信息列表"
 * @param params
 */
export function PostFrontV1FeedbackList(params: components.FeedbackListFrontReqParams) {
	return axios.post<components.FeedbackListFrontReply>(`/front/v1/feedback/list`, params)
}

/**
 * @description "举报列表"
 * @param params
 */
export function GetBackV1ReportList(params: components.ReportListBackReqParams) {
	return axios.get<components.ReportListBackReply>(`/back/v1/report/list`, params)
}

/**
 * @description "举报处理"
 * @param req
 */
export function PostBackV1ReportReply(req: components.ReportReplyBackReq) {
	return axios.post<components.ReportReplyBackReply>(`/back/v1/report/reply`, req)
}

/**
 * @description "举报信息"
 * @param req
 */
export function PostFrontV1ReportAdd(req: components.ReportAddFrontReq) {
	return axios.post<components.ReportAddFrontReply>(`/front/v1/report/add`, req)
}

/**
 * @description "获取用户信息"
 * @param params
 */
export function GetBackV1UserGetId(params: components.UserGetBackReqParams, id: number) {
	return axios.get<components.UmsUser>(`/back/v1/user/get/${id}`, params)
}

/**
 * @description "用户列表"
 * @param params
 */
export function GetBackV1UserList(params: components.UserListBackReqParams) {
	return axios.get<components.UserListBackReply>(`/back/v1/user/list`, params)
}

/**
 * @description "用户登录密码"
 * @param req
 */
export function PostBackV1UserPasswordChange(req: components.UserChangePasswordReq) {
	return axios.post<components.UserChangePasswordReply>(`/back/v1/user/password/change`, req)
}

/**
 * @description "用户实名状态"
 * @param req
 */
export function PostBackV1UserRealnamestatusChange(req: components.UserChangeRealNameStatusReq) {
	return axios.post<components.UserChangeRealNameStatusReply>(`/back/v1/user/realnamestatus/change`, req)
}

/**
 * @description "用户状态"
 * @param req
 */
export function PostBackV1UserStatusChange(req: components.UserChangeStatusReq) {
	return axios.post<components.UserChangeStatusReply>(`/back/v1/user/status/change`, req)
}

/**
 * @description "用户信息"
 * @param params
 */
export function GetFrontV1UserInfoId(params: components.UserInfoFrontReqParams, id: number) {
	return axios.get<components.UmsUserInfo>(`/front/v1/user/info/${id}`, params)
}

/**
 * @description "用户列表"
 * @param params
 */
export function GetFrontV1UserList(params: components.UserListFrontReqParams) {
	return axios.get<components.UserListFrontReply>(`/front/v1/user/list`, params)
}

/**
 * @description "用户手机号验证码登录"
 * @param req
 */
export function PostFrontV1UserLoginMobile(req: components.LoginMobileFrontReq) {
	return axios.post<components.JwtTokenFront>(`/front/v1/user/login/mobile`, req)
}

/**
 * @description "用户密码登录"
 * @param req
 */
export function PostFrontV1UserLoginPassword(req: components.LoginPasswordFrontReq) {
	return axios.post<components.JwtTokenFront>(`/front/v1/user/login/password`, req)
}

/**
 * @description "用户注册"
 * @param req
 */
export function PostFrontV1UserRegister(req: components.RegisterFrontReq) {
	return axios.post<components.UserFrontReply>(`/front/v1/user/register`, req)
}

/**
 * @description "用户基本信息"
 */
export function GetFrontV1UserBase() {
	return axios.get<components.UmsUser>(`/front/v1/user/base`)
}

/**
 * @description "用户修改登录密码"
 * @param req
 */
export function PostFrontV1UserChangePassword(req: components.ChangePasswordFrontReq) {
	return axios.post<components.UserFrontReply>(`/front/v1/user/change/password`, req)
}

/**
 * @description "用户注销账户"
 * @param req
 */
export function PostFrontV1UserClose(req: components.CloseFrontReq) {
	return axios.post<components.UserFrontReply>(`/front/v1/user/close`, req)
}

/**
 * @description "用户详情"
 */
export function GetFrontV1UserDetail() {
	return axios.get<components.UmsUser>(`/front/v1/user/detail`)
}

/**
 * @description "邀请排行"
 * @param params
 */
export function GetFrontV1UserInviteList(params: components.UserInviteistFrontReqParams) {
	return axios.get<components.UserInviteListFrontReply>(`/front/v1/user/invite/list`, params)
}

/**
 * @description "登录或注册后设置头像与昵称"
 * @param req
 */
export function PostFrontV1UserLoginProfile(req: components.LoginProfileFrontReq) {
	return axios.post<components.UserFrontReply>(`/front/v1/user/login/profile`, req)
}

/**
 * @description "我的邀请列表"
 * @param params
 */
export function GetFrontV1UserMyInviteList(params: components.UserMyInviteistFrontReqParams) {
	return axios.get<components.UserMyInviteListFrontReply>(`/front/v1/user/my/invite/list`, params)
}

/**
 * @description "设置个人资料"
 * @param req
 */
export function PostFrontV1UserProfile(req: components.ProfileFrontReq) {
	return axios.post<components.UserFrontReply>(`/front/v1/user/profile`, req)
}

/**
 * @description "用户实名认证"
 * @param req
 */
export function PostFrontV1UserRealName(req: components.RealNameFrontReq) {
	return axios.post<components.UserFrontReply>(`/front/v1/user/real/name`, req)
}

/**
 * @description "用户设置支付密码"
 * @param req
 */
export function PostFrontV1UserSafePassword(req: components.SafePasswordFrontReq) {
	return axios.post<components.UserFrontReply>(`/front/v1/user/safe/password`, req)
}

/**
 * @description "我的未读消息数量"
 */
export function GetFrontV1UserNoticeUnreadNumber() {
	return axios.get<components.UserNoticeUnreadNumberFrontReply>(`/front/v1/user/notice/unread/number`)
}

/**
 * @description "删除单条消息"
 * @param req
 */
export function PostFrontV1UserNoticeDelete(req: components.UserNoticeDeleteFrontReq) {
	return axios.post<components.UserNoticeDeleteFrontReply>(`/front/v1/user/notice/delete`, req)
}

/**
 * @description "删除全总消息"
 */
export function PostFrontV1UserNoticeEmpty() {
	return axios.post<components.UserNoticeEmptyFrontReply>(`/front/v1/user/notice/empty`)
}

/**
 * @description "我的消息"
 * @param params
 */
export function GetFrontV1UserNoticeList(params: components.UserNoticeListFrontReqParams) {
	return axios.get<components.UserNoticeListFrontReply>(`/front/v1/user/notice/list`, params)
}

/**
 * @description "设置消息已读"
 * @param req
 */
export function PostFrontV1UserNoticeRead(req: components.UserNoticeReadFrontReq) {
	return axios.post<components.UserNoticeReadFrontReply>(`/front/v1/user/notice/read`, req)
}

/**
 * @description "设置消息全部已读"
 */
export function PostFrontV1UserNoticeReadAll() {
	return axios.post<components.UserNoticeReadAllFrontReply>(`/front/v1/user/notice/read/all`)
}

/**
 * @description "发送消息"
 * @param req
 */
export function PostFrontV1UserNoticeSend(req: components.UserNoticeSendFrontReq) {
	return axios.post<components.UserNoticeSendFrontReply>(`/front/v1/user/notice/send`, req)
}
