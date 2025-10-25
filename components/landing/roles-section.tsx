"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShieldCheck, UserCheck, GraduationCap, ArrowRight } from "lucide-react"

const roles = [
  {
    icon: ShieldCheck,
    title: "Admin",
    subtitle: "Quản trị viên",
    description: "Quản lý toàn bộ hệ thống với quyền hạn cao nhất",
    features: [
      "Quản lý người dùng và phân quyền",
      "Tạo và quản lý kỳ thi, môn thi",
      "Phân công phòng thi và giám thị",
      "Duyệt điểm và công bố kết quả",
      "Xuất báo cáo và thống kê",
    ],
    color: "primary",
    gradient: "from-primary to-primary/60",
  },
  {
    icon: UserCheck,
    title: "Giám thị",
    subtitle: "Cán bộ chấm thi",
    description: "Quản lý phòng thi và nhập điểm cho thí sinh",
    features: [
      "Xem danh sách phòng thi được phân công",
      "Quản lý thí sinh trong phòng",
      "Ghi nhận tình trạng dự thi",
      "Nhập và lưu điểm thi",
      "Xem báo cáo phòng thi",
    ],
    color: "secondary",
    gradient: "from-secondary to-secondary/60",
  },
  {
    icon: GraduationCap,
    title: "Học viên",
    subtitle: "Thí sinh",
    description: "Đăng ký thi và tra cứu kết quả trực tuyến",
    features: [
      "Đăng ký tài khoản và đăng nhập",
      "Xem danh sách kỳ thi",
      "Đăng ký dự thi trực tuyến",
      "Tra cứu kết quả thi",
      "Gửi phản hồi và khiếu nại",
    ],
    color: "accent",
    gradient: "from-accent to-accent/60",
  },
]

export function RolesSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Dành cho mọi đối tượng
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hệ thống được thiết kế với 3 vai trò chính, mỗi vai trò có giao diện
            và chức năng riêng biệt
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {roles.map((role, index) => {
            const Icon = role.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/30 overflow-hidden group">
                  {/* Gradient header */}
                  <div className={`h-2 bg-gradient-to-r ${role.gradient}`} />
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${role.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {role.subtitle}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl mb-2">{role.title}</CardTitle>
                    <CardDescription className="text-base">
                      {role.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      {role.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.5 + idx * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className={`w-5 h-5 rounded-full bg-${role.color}/10 flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <div className={`w-2 h-2 rounded-full bg-${role.color}`} />
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    <Button 
                      variant="outline" 
                      className="w-full group/btn"
                    >
                      Tìm hiểu thêm
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

