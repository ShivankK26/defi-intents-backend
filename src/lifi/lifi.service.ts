import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class LifiService {
    private readonly baseUrl = 'https://li.quest/v1';

    async getAvailableChains() {
        try {
            const response = await axios.get(`${this.baseUrl}/chains`, {
                headers: {
                    'accept': 'application/json'
                }
            });
            return response.data;
        } catch (error) {
            throw new Error(`Failed to fetch available chains: ${error.message}`);
        }
    }

    async getAvailableBridges() {
        try {
            const response = await axios.get(`${this.baseUrl}/bridges`, {
                headers: {
                    'accept': 'application/json'
                }
            });
            return response.data;
        } catch (error) {
            throw new Error(`Failed to fetch available bridges: ${error.message}`);
        }
    }

    // adding further intentsdsds
    //eeee
}
