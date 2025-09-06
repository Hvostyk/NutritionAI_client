'use client'
import { useGetAllBodyMetricsQuery, useGetCurrentBodyMetricsQuery } from "@/entities/bodyMetrics/model/bodyMetricsApi"
import { formatToClientDate } from "@/shared/lib/format-to-client-date"
import { Skeleton, Spinner, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react"

const MetricsCard = () => {

    const { data: currentBodyMetric, isLoading: isLoadingCurrent, error: errorCurrent } = useGetCurrentBodyMetricsQuery()
    const date = formatToClientDate(currentBodyMetric?.date)
    return (
        <Skeleton isLoaded={!isLoadingCurrent} className="w-[30%]">
            <Table hideHeader>
                <TableHeader>
                    <TableColumn>bodyMetric</TableColumn>
                    <TableColumn>value</TableColumn>
                </TableHeader>
                <TableBody>
                    <TableRow key='1'>
                        <TableCell>Дата создания</TableCell>
                        <TableCell>{date}</TableCell>
                    </TableRow>

                    <TableRow key='2'>
                        <TableCell>Вес</TableCell>
                        <TableCell>{currentBodyMetric?.weight}кг</TableCell>
                    </TableRow>

                    <TableRow key='3'>
                        <TableCell>Рост</TableCell>
                        <TableCell>{currentBodyMetric?.height}см</TableCell>
                    </TableRow>

                    <TableRow key='4'>
                        <TableCell>Процент массы жира</TableCell>
                        <TableCell>{currentBodyMetric?.bodyFat}%</TableCell>
                    </TableRow>

                    <TableRow key='5'>
                        <TableCell>Мышечная масса</TableCell>
                        <TableCell>{currentBodyMetric?.muscleMass}кг</TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </Skeleton>
    )
}

export default MetricsCard