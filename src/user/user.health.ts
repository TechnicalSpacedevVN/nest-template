import { Injectable } from '@nestjs/common'
import { HealthCheckError, HealthIndicator } from '@nestjs/terminus'

@Injectable()
export class UserHealthIndicator extends HealthIndicator {
  async isHealthy(key: string) {
    const isHealthy = true
    let result = this.getStatus(key, isHealthy, { badboys: 1 })

    if (isHealthy) {
      return result
    }
    throw new HealthCheckError('User Healthy check failed', result)
  }
}
